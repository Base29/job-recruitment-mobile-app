import config from '../config';
import {Alert} from 'react-native';
import NavigationService from '../../NavigationService';
export const FETCH_JOBS = 'FETCH_JOBS';
export const addJob = async (title, description, creator) => {
    const endpoint = `${config.BASE_URL}/jobs`;
    console.log(title);
    console.log(description);
    console.log(creator);

    await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            creator: creator
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                Alert.alert('Error', response.message);
            } else {
                NavigationService.navigate('HomeScreen');
            }
        })
        .catch(error => console.log('ADD JOB ERROR', error));
};

export const fetchJobs = () => async dispatch => {
    const endpoint = `${config.BASE_URL}/jobs`;

    await fetch(endpoint, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            if (response.length > 0) {
                dispatch({type: FETCH_JOBS, payload: response});
            }
        })
        .catch(error => console.log('JOBS ERROR', error));
};
