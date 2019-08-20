import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';

const AppNavigator = createStackNavigator({
    Home,
    Dashboard
});

const AppContainer = createAppContainer(AppNavigator);

export default class AppNav extends Component {
    render() {
        return <AppContainer />;
    }
}
