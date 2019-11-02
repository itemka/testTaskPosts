import React from 'react';
import {connect} from "react-redux";
import {isAuthAction, logInThunk, logOutThunk, restoreState} from "../Redux/AuthReducer";
import {getIsAuth} from "../Redux/Selectors";
import {Redirect} from "react-router-dom";
import LoginReducerForm from "./LoginForm";

class LoginContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        let onSubmit = formData => {
            console.log(formData);
            this.props.logInThunk(formData.Email, formData.Password);
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