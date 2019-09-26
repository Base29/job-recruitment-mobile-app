import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component {
    onPressLogout = () => {
        AsyncStorage.removeItem('token');
        this.props.navigation.navigate('LoginScreen');
    };

    render() {
        const {profile} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.profileInfoView}>
                    <Text style={styles.text}>{`${profile.firstName} ${profile.lastName}`}</Text>
                    <Text style={styles.text}>{profile.email}</Text>
                </View>
                <View style={styles.logoutButtonView}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => this.onPressLogout()}>
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({profile: state.userProfile.data});

export default connect(mapStateToProps)(Profile);
