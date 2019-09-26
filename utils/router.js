import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Home from '../src/screens/Home/Home';
import Login from '../src/screens/Login/Login';
import Profile from '../src/screens/Profile/Profile';
import Register from '../src/screens/Register/Register';
import JobItem from '../src/screens/JobItem/JobItem';
import AddJob from '../src/screens/AddJob/AddJob';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const LoginStack = createStackNavigator({
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    RegisterScreen: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    },
    HomeScreen: {
        screen: Home
    },
    ProfileScreen: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    },
    AddJobScreen: {
        screen: AddJob,
        navigationOptions: {
            title: 'Create Job'
        }
    },
    SingleJobScreen: {
        screen: JobItem
    }
});

const AuthenticatedStack = createStackNavigator({
    HomeScreen: {
        screen: Home
    },
    SingleJobScreen: {
        screen: JobItem
    },
    ProfileScreen: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    },
    AddJobScreen: {
        screen: AddJob,
        navigationOptions: {
            title: 'Create Job'
        }
    },
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            headerLeft: null,
            title: 'Login'
        }
    },
    RegisterScreen: {
        screen: Register
    }
});

export const LoginStackNavigation = createAppContainer(LoginStack);
export const AuthenticatedStackNavigation = createAppContainer(AuthenticatedStack);
