import React, { Component } from 'react';
import { Route } from './dist/index';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { EmptyLayout } from './layouts/EmptyLayout';

const history = createBrowserHistory();

export default class App extends Component {
  render () {
    console.log(HomePage);
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} exact layout={DefaultLayout} />
          <Route path="/login" component={LoginPage} layout={EmptyLayout} />
        </Switch>
      </Router>
    );
  }
}
