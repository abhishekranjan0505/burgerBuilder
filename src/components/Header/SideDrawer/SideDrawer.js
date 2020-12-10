import React from "react";
import "./SideDrawer.css";
import Logo from "../../../assets/burger-logo.png";
import Backdrop from "../../Backdrop/Backdrop";

const sideDrawer = (props) => {
  return (
    <>
      <Backdrop clicked={props.clicked} />
      <div className="side-drawer">
        <img src={Logo} alt="logo" />
        <button>BurgerBuilder</button>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default sideDrawer;
