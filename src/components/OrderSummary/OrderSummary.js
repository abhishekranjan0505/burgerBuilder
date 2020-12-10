import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./OrderSummary.css";

const orderSummary = (props) => {
  return (
    <>
      <Backdrop />
      <div className="modal">
        <h3>Your Order</h3>
        <p>A delecious burger with the following ingredients:</p>
        <ul>
          {Object.keys(props.ingredients).map((igKey) => {
            return (
              <li style={{ textTransform: "uppercase" }}>
                {igKey}: {props.ingredients[igKey]}
              </li>
            );
          })}
        </ul>
        <p>
          <strong>Total Price: {props.price.toFixed(2)}</strong>
        </p>
        <p>Do you want to checkout ?</p>
        <button onClick={props.canceled}>CANCEL</button>
        <button
          onClick={() =>
            window.alert("Your Order has been successfully placed!")
          }
        >
          CONTINUE
        </button>
      </div>
    </>
  );
};

export default orderSummary;
