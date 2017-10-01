import { createStore, combineReducers } from 'redux';
import { reducer } from './SpotRedux';

export default createStore(combineReducers({ spots: reducer }));