import React, { Component } from "react";
import { Route } from "react-router4-with-layouts";
import { BrowserRouter, Switch } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { EmptyLayout } from "./layouts/EmptyLayout";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <Switch>
          <Route path="/" component={HomePage} exact layout={DefaultLayout} />
          <Route path="/login" component={LoginPage} layout={EmptyLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
