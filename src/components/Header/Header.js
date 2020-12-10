import React from "react";
import "./Header.css";
import Logo from "../../assets/burger-logo.png";
import SideDrawer from "./SideDrawer/SideDrawer";

const header = (props) => {
  return (
    <header className="header">
      <div className="drawer-toggle">
        <div className="hambergur" onClick={props.clicked}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src={Logo} alt="logo" />
      </div>
      {props.show ? <SideDrawer clicked={props.clicked}/> : null}
    </header>
  );
};

export default header;
