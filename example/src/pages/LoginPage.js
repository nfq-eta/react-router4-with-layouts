import React, { Component } from "react";

import styles from "./Page.css";
import { Link } from "react-router-dom";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        Login Page
        <form action="" className={styles.login}>
          <input type="email" />
          <input type="password" />
          <button type="submit">Login</button>
          <hr />
          <Link to="/">Back to Home</Link>
        </form>
      </div>
    );
  }
}
