import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import config from '../../../utils/config';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import * as actions from '../../../utils/actions';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onPressLogin = async () => {
        const {username, password} = this.state;
        this.props.saveUserProfile(username, password);
    };

    onPressRegister = () => {
        this.props.navigation.navigate('RegisterScreen');
    };
    render() {
        const {username, password} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.loginFormView}>
                    <TextInput value={username} onChangeText={text => this.setState({username: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="username" autoCapitalize="none" />
                    <TextInput value={password} onChangeText={text => this.setState({password: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="password" secureTextEntry={true} />
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.onPressLogin()}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerView} onPress={() => this.onPressRegister()}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    actions
)(Login);
