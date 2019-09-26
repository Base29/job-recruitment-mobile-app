import config from '../config';
import NavigationService from '../../NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import EmailValidator from 'email-validator';
import {Alert} from 'react-native';

export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
export const saveUserProfile = (username, password) => async dispatch => {
    const endpoint = `${config.BASE_URL}/login`;
    await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                Alert.alert('Error', response.message);
            } else {
                dispatch({type: SAVE_USER_PROFILE, payload: response});
                AsyncStorage.setItem('token', response.token);
                AsyncStorage.setItem('userId', response._id);
                NavigationService.navigate('HomeScreen');
            }
        })
        .catch(error => console.log('ERROR', error));
};

export const getUser = () => async dispatch => {
    const userId = await AsyncStorage.getItem('userId');
    const endpoint = `${config.BASE_URL}/user/${userId}`;
    await fetch(endpoint, {method: 'GET'})
        .then(response => response.json())
        .then(response => {
            dispatch({type: SAVE_USER_PROFILE, payload: response});
        })
        .catch(error => console.log('GET USER ERROR', error));
};

export const registerUser = async (firstName, lastName, email, password) => {
    const endpoint = `${config.BASE_URL}/register`;
    if (!EmailValidator.validate(email)) {
        Alert.alert('Invalid Email', 'Please use a valid email address to register', [
            {
                text: 'Ok',
                onPress: () => console.log('OK PRESSED')
            }
        ]);
    } else {
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    Alert.alert('Error', response.message);
                } else {
                    Alert.alert('Success', 'User register successfully');
                    NavigationService.navigate('LoginScreen');
                }
            })
            .catch(error => console.log('REG ERROR', error));
    }
};
