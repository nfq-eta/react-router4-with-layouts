import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Layout.css";
import { MenuComponent } from "../components/MenuComponent";

export class DefaultLayout extends Component {
  render() {
    return (
      <div className={styles.default}>
        DefaultLayout
        <header>
          Header
          <MenuComponent />
        </header>
        <main className={styles.main}>{this.props.children}</main>
        <footer>Footer</footer>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
