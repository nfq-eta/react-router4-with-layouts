import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactRoute } from 'react-router-dom';

export const Route = (initProps) => {
  const { component, layout, ...rest } = initProps;
  let routeComponent = props => React.createElement(component, props);

  if (layout) {
    routeComponent = props =>
      React.createElement(layout, props, React.createElement(component, props));
  }

  return <ReactRoute {...rest} render={routeComponent} />;
};

Route.propTypes = {
  layout: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

Route.defaultProps = {
  layout: [],
};
