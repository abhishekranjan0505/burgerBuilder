import React from "react";
import "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="build-control">
      <h4>Current Price = {props.price.toFixed(2)}</h4>
      <hr />
      <div className="control-menu">
        <p>Salad</p>
        <button
          onClick={() => props.ingredientRemoved("salad")}
          disabled={props.disabled["salad"]}
        >
          Less
        </button>
        <button onClick={() => props.ingredientAdded("salad")}>more</button>
      </div>
      <hr />
      <div className="control-menu">
        <p>Cheese</p>
        <button
          onClick={() => props.ingredientRemoved("cheese")}
          disabled={props.disabled["cheese"]}
        >
          Less
        </button>
        <button onClick={() => props.ingredientAdded("cheese")}>more</button>
      </div>
      <hr />
      <div className="control-menu">
        <p>Bacon</p>
        <button
          onClick={() => props.ingredientRemoved("bacon")}
          disabled={props.disabled["bacon"]}
        >
          Less
        </button>
        <button onClick={() => props.ingredientAdded("bacon")}>more</button>
      </div>
      <hr />

      <div className="control-menu">
        <p>Meat</p>
        <button
          onClick={() => props.ingredientRemoved("meat")}
          disabled={props.disabled["meat"]}
        >
          Less
        </button>
        <button onClick={() => props.ingredientAdded("meat")}>more</button>
      </div>
      <hr />
      <button className="order-button" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
  );
};

export default buildControl;
