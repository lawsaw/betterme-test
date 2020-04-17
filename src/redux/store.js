import {createStore, combineReducers, applyMiddleware} from 'redux';
import searchReducer from "./search-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers(
    {search: searchReducer}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;