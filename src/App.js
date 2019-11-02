import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import PostsContainer from "./components/Posts/PostsContainer";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Route path={`/home`} render={() => <Home/>}/>
                    <Route path={`/posts`} render={() => <PostsContainer/>}/>
                    <Route path={`/profile`} render={() => <Profile/>}/>
                    <Route path={`/profile`} render={() => <Profile/>}/>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(App);