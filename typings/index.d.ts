declare module 'react-router4-with-layouts/index' {
    /// <reference types="react" />
    import * as React from 'react';
    import * as PropTypes from 'prop-types';
    import { RouteProps } from 'react-router-dom';
    export interface IRouteProps {
        layout?: React.ComponentType<RouteProps> | React.ComponentType<any>;
        component: React.ComponentType<RouteProps> | React.ComponentType<any>;
    }
    export class Route extends React.Component<IRouteProps & RouteProps, {}> {
        static propTypes: {
            layout: PropTypes.Requireable<any>;
            component: PropTypes.Validator<any>;
        };
        render(): JSX.Element;
    }

}
declare module 'react-router4-with-layouts' {
    import main = require('index');
    export = main;
}
