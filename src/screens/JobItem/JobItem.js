import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import config from '../../../utils/config';
import styles from './styles';
import moment from 'moment';

class JobItem extends Component {
    state = {
        jobDetail: {}
    };
    componentDidMount = async () => {
        await this.getJobDetail();
    };

    getJobDetail = async () => {
        const jobId = this.props.navigation.state.params.jobId;
        const endpoint = `${config.BASE_URL}/jobs/${jobId}`;

        await fetch(endpoint, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                this.setState({jobDetail: response});
            })
            .catch(error => console.log('JOB DETAIL ERR', error));
    };

    onPressDelete = async () => {
        const jobId = this.props.navigation.state.params.jobId;
        const endpoint = `${config.BASE_URL}/jobs/${jobId}`;

        await fetch(endpoint, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(response => {
                this.props.navigation.navigate('HomeScreen');
                Alert.alert('Success', response.message);
            })
            .catch(error => console.log('JOB DELETE ERR', error));
    };
    render() {
        const {jobDetail} = this.state;
        const dateCreated = moment(jobDetail.datecreated).format('ll');
        return (
            <View style={styles.container}>
                <View style={styles.jobTitleView}>
                    <Text style={styles.jobTitle}>{jobDetail.title}</Text>
                </View>
                <View style={styles.jobDetailsView}>
                    <View style={styles.jobDescriptionView}>
                        <Text style={styles.jobDescriptionText}>{jobDetail.description}</Text>
                    </View>
                    <View style={styles.creationDetailView}>
                        <View style={styles.authorNameView}>
                            <Text style={styles.creationText}>Creator: {jobDetail.creator}</Text>
                        </View>
                        <View style={styles.dateCreatedView}>
                            <Text style={styles.creationText}>Posted: {dateCreated}</Text>
                        </View>
                    </View>
                    <View style={styles.deleteButtonView}>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => this.onPressDelete()}>
                            <Text style={styles.deleteButtonText}>Delete Job</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default JobItem;
