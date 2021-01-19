import React from "react";
import Burger from "../../Burger/Burger.js";
import "./checkoutSummary.css";

const checkoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>Hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default checkoutSummary;
