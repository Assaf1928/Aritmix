import React, { Component } from "react";
import Axuiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";


class Layout extends Component {
  state = {
   
  };




  render() {
    return (
      <Axuiliary>
        <div className={classes.header}>Clean Inc.</div>
        <div className={classes.relative}>
          <main>{this.props.children}</main>
        </div>
      </Axuiliary>
    );
  }
}

export default Layout;
