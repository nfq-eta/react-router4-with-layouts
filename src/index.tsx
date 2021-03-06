import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Route as ReactRoute, RouteProps } from 'react-router-dom';

export interface IRouteProps {
    layout?: React.ComponentType<RouteProps> | React.ComponentType<any>;
}

export class Route extends React.Component<IRouteProps & RouteProps, {}> {

    static propTypes = {
        layout: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]),
    };

    render() {
        const { component, layout, ...rest } = this.props;
        if (!component) {
            return;
        }
        let routeComponent = (props: any) => React.createElement(component, props);

        if (layout) {
            routeComponent = props =>
                React.createElement(layout, props, React.createElement(component, props));
        }

        return <ReactRoute {...rest} render={routeComponent} />;
    }
}
