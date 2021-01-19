import React from "react";
import "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="control-menu">
      <p>{props.label}</p>
      <button onClick={props.removed} disabled={props.isDisabled}>
        Less
      </button>
      <button onClick={props.added}>more</button>
    </div>
  );
};

export default buildControl;
