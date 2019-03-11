import { createStore, compose, applyMiddleware  } from "redux";
import postReducer from "../reducers/reducers";
import thunk from 'redux-thunk';
import {fetchAllPosts} from '../actions/actions';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(postReducer, storeEnhancers(applyMiddleware(thunk)));
store.dispatch(fetchAllPosts());

export default store;
