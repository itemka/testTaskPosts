import React from 'react';
import css from './Home.module.css';
import {getIsAuth} from "../Redux/Selectors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (this.props.isAuth ? <div className={css.somePage}><div>Home Page</div></div>
                : <Redirect to={`/login`}/>);
    };
}

let mapStateToProps = state => ({isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {})(Home);