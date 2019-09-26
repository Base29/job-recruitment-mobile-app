import {SAVE_USER_PROFILE} from '../actions';
const initialState = {
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_PROFILE:
            return {...state, data: action.payload};
        default:
            return state;
    }
};
