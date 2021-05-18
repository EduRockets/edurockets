import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers.js';

const initialState = {};

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default Store;
