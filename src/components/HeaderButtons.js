import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HeaderButtons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="account" style={styles.icon} onPress={() => this.props.onPressProfile()} />
                <Icon name="plus" style={styles.icon} onPress={() => this.props.onPressAddJob()} />
                <Icon name="power" style={styles.icon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 15
    },
    icon: {
        fontSize: 25,
        marginLeft: 10
    }
});

export default HeaderButtons;
