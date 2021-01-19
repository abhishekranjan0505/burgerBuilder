import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios.orders.js";
import Spinner from "../../UI/Spinner/Spinner.js";
import Modal from "../../UI/Modal/Modal.js";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler.js";

const INGREDIENT_PRICE = {
  salad: 5,
  bacon: 6,
  meat: 10,
  cheese: 4,
};

class Burgerbuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    show: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-app-d3758.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => this.setState({ error: true }));
  }

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

  orderPurchasedHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Abhishek Ranjan",
        email: "abhishekranjan0505@gmail.com",
        address: {
          area: "hanuman market kazichak",
          pincode: "803213",
          city: "patna",
          district: "patna",
          state: "bihar",
        },
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then(() => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let var_orderSummary = <Spinner />;

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.orderHandler}
          />
        </>
      );

      var_orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          canceled={this.orderCancelHandler}
          ordered={this.orderPurchasedHandler}
        />
      );
    }

    if (this.state.loading) {
      var_orderSummary = <Spinner />;
    }

    return (
      <>
        {burger}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.orderCancelHandler}
        >
          {var_orderSummary}
        </Modal>
      </>
    );
  }
}

export default withErrorHandler(Burgerbuilder, axios);
