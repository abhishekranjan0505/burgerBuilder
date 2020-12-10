import React, { Component } from "react";
import BuildControl from "../../components/BuildControls/BuildControl";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Header from "../../components/Header/Header.js";

const INGREDIENT_PRICE = {
  salad: 5,
  bacon: 6,
  meat: 10,
  cheese: 4,
};

class Burgerbuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    show: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  }

  orderHandler = () => {
    this.setState({ purchasing: true });
  };

  orderCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  showSideDrawerHandler = () => {
    const show = this.state.show;
    this.setState({ show: !show });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <div>
        <Header clicked={this.showSideDrawerHandler} show={this.state.show} />
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.orderHandler}
        />
        {this.state.purchasing ? (
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            canceled={this.orderCancelHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default Burgerbuilder;
