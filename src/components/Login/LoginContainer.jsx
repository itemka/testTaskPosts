import React from 'react';
import {connect} from "react-redux";
import {isAuthAction, logInThunk, logOutThunk} from "../Redux/AuthReducer";
import {getIsAuth} from "../Redux/Selectors";
import {Redirect} from "react-router-dom";
import LoginReducerForm from "./LoginForm";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.restoreState();
    }

    state = {
        isAuth: this.props.isAuth,
    };
    saveState = () => localStorage.setItem("localState", JSON.stringify(this.state));

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("localState");
        // если не было ни одного сохранения, то будет null.
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
        this.setState(state, () => this.saveState());
        console.log(state)
    };



    render() {
        let onSubmit = formData => {
            console.log(formData);
            this.props.logInThunk(formData.Email, formData.Password);
            // this.setState({isAuth: true}, () => this.saveState())
        };
        return (
            <div>
                {this.props.isAuth
                    ? <Redirect to={`/profile`}/>
                    : <LoginReducerForm onSubmit={onSubmit}/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {logInThunk, isAuthAction, logOutThunk})(LoginContainer);