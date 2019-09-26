/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LoginStackNavigation, AuthenticatedStackNavigation} from './utils/router';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './NavigationService';

export default class App extends Component {
    state = {
        isLoggedIn: false
    };
    componentDidMount = async () => {
        const token = await this.getToken();
        if (token !== null) {
            this.setState({isLoggedIn: true});
        }
    };

    getToken = async () => {
        return await AsyncStorage.getItem('token');
    };
    render() {
        if (this.state.isLoggedIn) {
            return (
                <AuthenticatedStackNavigation
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            );
        } else {
            return (
                <LoginStackNavigation
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            );
        }
    }
}
