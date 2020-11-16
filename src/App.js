import React from "react";
//import logo from './logo.svg';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../src/Containers/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
