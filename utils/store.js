import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = compose(applyMiddleware(thunk));
const reducer = combineReducers(reducers);

export const store = createStore(reducer, composeEnhancers);
