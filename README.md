# react-router4-with-layouts

> Allow Router to have layout prop with typescript definitions

[![NPM](https://img.shields.io/npm/v/react-router4-with-layouts.svg)](https://www.npmjs.com/package/react-router4-with-layouts)

## Install

```bash
yarn add react-router4-with-layouts
```

## Usage [more info](https://github.com/nfq-eta/react-router4-with-layouts/tree/master/example)

```jsx
import React, { Component } from 'react';
import { Route } from 'react-router4-with-layouts';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { EmptyLayout } from './layouts/EmptyLayout';

const history = createBrowserHistory();

export default class App extends Component {
  render () {
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
```

## Todo:
* [ ] Add tests
* [ ] Refactor example and use StoryBook
* [x] Add travis to publish new releases
* [x] Add changelog

## License

MIT © [Vytenis Kučiauskas](https://github.com/FDiskas)

> **NOTE** Thanks to [react-modern-library-boilerplate](https://github.com/transitive-bullshit/react-modern-library-boilerplate)
