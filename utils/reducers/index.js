import {combineReducers} from 'redux';
import profile from './userProfileReducer';
import jobs from './jobReducer';

const reducers = {
    userProfile: profile,
    jobsData: jobs
};

export default reducers;
