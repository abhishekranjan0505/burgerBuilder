import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Checkout from "../src/containers/Checkout/checkout.js";
import BurgerBuilder from "../src/containers/Burgerbuilder/Burgerbuilder";
import Layout from "../src/hoc/Layout/Layout.js";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="" component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
