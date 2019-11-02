import React from 'react';
import css from './../Home/Home.module.css';
import {getIsAuth} from "../Redux/Selectors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Profile extends React.Component {
    render() {
        return (this.props.isAuth ? <div className={css.somePage}><div>Profile Page</div></div>
            : <Redirect to={`/login`}/>);
    };
}

let mapStateToProps = state => ({isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {})(Profile);