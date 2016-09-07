import * as reducers from '../reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

const combined = combineReducers(reducers);
const store = createStoreWithMiddleware(combined);

export default store;