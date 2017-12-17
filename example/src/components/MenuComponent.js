import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import styles from './MenuComponent.css';

export class MenuComponent extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <BrowserRouter basename="/react-router4-with-layouts"/>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/login" >Login</NavLink>
      </div>
    );
  }
}
