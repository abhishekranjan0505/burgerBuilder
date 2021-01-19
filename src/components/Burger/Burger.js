import React, { Component } from "react";
import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";

class Burger extends Component {
  render() {
    let burgerTransformedIngredient = Object.keys(this.props.ingredients)
      .map((igKey) =>
        [...Array(this.props.ingredients[igKey])].map((_, i) => (
          <BurgerIngredient key={igKey + i} type={igKey} />
        ))
      )
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (burgerTransformedIngredient.length === 0) {
      burgerTransformedIngredient = <p>Please start adding ingredients</p>;
    }

    return (
      <div className={classes.Burger}>
        {<BurgerIngredient type="bread-top" />}

        {burgerTransformedIngredient}

        {<BurgerIngredient type="bread-bottom" />}
      </div>
    );
  }
}

export default Burger;
