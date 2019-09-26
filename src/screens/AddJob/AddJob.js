import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import * as actions from '../../../utils/actions';

class AddJob extends Component {
    state = {
        title: '',
        description: '',
        creator: ''
    };

    onPressAddJob = async () => {
        const {title, description, creator} = this.state;
        await this.props.addJob(title, description, creator);
    };
    render() {
        const {title, description, creator} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.addJobFormContainer}>
                    <TextInput value={title} onChangeText={text => this.setState({title: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="Job Title" />
                    <TextInput value={description} onChangeText={text => this.setState({description: text})} style={[styles.textInput, {height: 200, textAlign: 'left'}]} underlineColorAndroid="transparent" multiline={true} />
                    <TextInput value={creator} onChangeText={text => this.setState({creator: text})} style={styles.textInput} underlineColorAndroid="transparent" placeholder="Creator Name" />

                    <TouchableOpacity style={styles.addJobButton} onPress={() => this.onPressAddJob()}>
                        <Text style={styles.addJobButtonText}>Add Job</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    null,
    actions
)(AddJob);
