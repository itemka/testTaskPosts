import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import AuthReducer from "./components/Redux/AuthReducer";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import PostsReducer from "./components/Redux/PostsReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

const CombineReducer = combineReducers({
    authStore: AuthReducer,
    postsStore: PostsReducer,
    form: formReducer,
});
const store = createStore(CombineReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
