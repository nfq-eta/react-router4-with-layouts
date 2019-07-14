import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MenuComponent.css";

export class MenuComponent extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/login" >Login</NavLink>
      </div>
    );
  }
}
