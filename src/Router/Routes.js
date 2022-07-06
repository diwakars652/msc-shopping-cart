import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ProductDetails from '../Components/Body/Products/ProductDetails';

import MainComponent from "../Components/MainComponent";
import Checkout from "../Components/Body/Cart/Checkout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default Routes;
