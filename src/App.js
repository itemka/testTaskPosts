import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import PostsContainer from "./components/Posts/PostsContainer";
import {connect} from "react-redux";
import LoginContainer from "./components/Login/LoginContainer";
import {getIsAuth} from "./components/Redux/Selectors";
import {restoreState} from "./components/Redux/AuthReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.restoreState();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Route path={`/home`} render={() => <Home/>}/>
                    <Route path={`/posts`} render={() => <PostsContainer/>}/>
                    <Route path={`/profile`} render={() => <Profile/>}/>
                    <Route path={`/login`} render={() => <LoginContainer/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {restoreState})(App);