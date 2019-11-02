import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../Redux/Selectors";
import {logOutThunk} from "../Redux/AuthReducer";

class Header extends React.Component {
    state={
        pagesList: [
            {id: 1, pageName: 'Главная', pathToPage: '/home',},
            {id: 2, pageName: 'Новости', pathToPage: '/posts',},
            {id: 3, pageName: 'Профиль', pathToPage: '/profile',},
        ]
    };
    render() {
        let pagesList = this.state.pagesList.map(item =>
            <NavLink key={item.id} to={`${item.pathToPage}`} className={css.pageLink}>
                {item.pageName}
            </NavLink>
        );

        return (
            <div className={css.Header}>
                {pagesList}
                {this.props.isAuth ? <NavLink to={`/login`} onClick={this.props.logOutThunk} className={css.pageLink}>log
                    out</NavLink> : null}
            </div>
        );
    }
}

let mapStateToProps = state => ({isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {logOutThunk})(Header);