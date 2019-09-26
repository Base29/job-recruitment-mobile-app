import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import * as actions from '../../../utils/actions';
class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    onPressRegister = async () => {
        const {firstName, lastName, email, password} = this.state;
        await this.props.registerUser(firstName, lastName, email, password);
    };
    render() {
        const {firstName, lastName, email, password} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.registerFormContainer}>
                    <TextInput value={firstName} onChangeText={text => this.setState({firstName: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="first name" />
                    <TextInput value={lastName} onChangeText={text => this.setState({lastName: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="last name" />
                    <TextInput value={email} onChangeText={text => this.setState({email: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="email" autoCapitalize="none" />
                    <TextInput value={password} onChangeText={text => this.setState({password: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="password" secureTextEntry={true} />
                    <TouchableOpacity style={styles.registerButton} onPress={() => this.onPressRegister()}>
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    actions
)(Register);
