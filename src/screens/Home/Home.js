import React, {Component} from 'react';
import {Text, View, FlatList, TouchableWithoutFeedback, Alert} from 'react-native';
import {connect} from 'react-redux';
import config from '../../../utils/config';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../../../utils/actions';
class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Jobs',
        headerRight: (
            <View style={styles.iconContainer}>
                <Icon name="account" style={styles.icon} onPress={() => navigation.navigate('ProfileScreen')} />
                <Icon name="plus" style={styles.icon} onPress={() => navigation.navigate('AddJobScreen')} />
            </View>
        ),
        headerLeft: null
    });

    componentDidMount = async () => {
        await this.props.fetchJobs();
        await this.props.getUser();

        const willFocus = this.props.navigation.addListener('willFocus', payload => {
            this.props.fetchJobs();
        });
    };

    renderJobItem = job => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.navigation.navigate('SingleJobScreen', {jobId: job._id});
                    console.log('JOB ID', job._id);
                }}
            >
                <View style={styles.jobItemView}>
                    <Text style={styles.jobItemTitle}>{job.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.jobs} keyExtractor={(item, index) => item._id.toString()} renderItem={({item}) => this.renderJobItem(item)} />
            </View>
        );
    }
}
const mapStateToProps = state => ({jobs: state.jobsData.jobs});
export default connect(
    mapStateToProps,
    actions
)(Home);
