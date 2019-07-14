import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Layout.css";

export class EmptyLayout extends Component {
  render() {
    return (
      <div className={styles.login}>
        Component name: EmptyLayout
        <main className={styles.main}>{this.props.children}</main>
      </div>
    );
  }
}

EmptyLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
