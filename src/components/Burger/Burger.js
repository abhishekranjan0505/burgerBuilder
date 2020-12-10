import React, { Component } from "react";
import "./Burger.css";
import PropTypes from "prop-types";

class Burger extends Component {
  render() {
    const burgerIngredient = (type) => {
      let ingredient = null;

      switch (type) {
        case "bread-bottom":
          ingredient = <div className="bread-bottom" />;
          break;
        case "bread-top":
          ingredient = (
            <div className="bread-top">
              <div className="seeds1" />
              <div className="seeds2" />
            </div>
          );
          break;
        case "meat":
          ingredient = <div className="meat" />;
          break;
        case "cheese":
          ingredient = <div className="cheese" />;
          break;
        case "bacon":
          ingredient = <div className="bacon" />;
          break;
        case "salad":
          ingredient = <div className="salad" />;
          break;
        default:
          ingredient = null;
      }
      return ingredient;
    };

    let burgerTransformedIngredient = Object.keys(this.props.ingredients)
      .map((igKey) =>
        [...Array(this.props.ingredients[igKey])].map(() =>
          burgerIngredient(igKey)
        )
      )
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (burgerTransformedIngredient.length === 0) {
      burgerTransformedIngredient = <p>Please start adding ingredients</p>;
    }

    return (
      <div className="burger">
        {burgerIngredient("bread-top")}

        {burgerTransformedIngredient}

        {burgerIngredient("bread-bottom")}
      </div>
    );
  }
}

Burger.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Burger;
