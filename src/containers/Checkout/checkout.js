import React from "react";
import { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/checkoutSummary.js";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      meat: 2,
      cheese: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
