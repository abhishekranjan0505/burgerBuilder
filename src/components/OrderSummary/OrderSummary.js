import React from "react";
import "./OrderSummary.css";

const orderSummary = (props) => {
  return (
    <>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients).map((igKey) => {
          return (
            <li key={igKey} style={{ textTransform: "uppercase" }}>
              {igKey}: {props.ingredients[igKey]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Do you want to checkout ?</p>
      <button className="button" onClick={props.canceled}>
        CANCEL
      </button>
      <button className="button" onClick={props.ordered}>
        CONTINUE
      </button>
    </>
  );
};

export default orderSummary;
