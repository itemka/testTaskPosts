import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth, getPageList} from "../Redux/Selectors";
import {logOutThunk} from "../Redux/AuthReducer";

class Header extends React.Component {
    render() {

        let pageList = this.props.pageList.map(item =>
            <NavLink key={item.id} to={`${item.pathToPage}`} className={css.pageLink}>
                {item.pageName}
            </NavLink>
        );

        return (
            <div className={css.Header}>
                {pageList}
                {this.props.isAuth ? <NavLink to={`/login`} onClick={this.props.logOutThunk} className={css.pageLink}>log
                    out</NavLink> : null}
            </div>
        );
    }
}

let mapStateToProps = state => ({pageList: getPageList(state), isAuth: getIsAuth(state)});
export default connect(mapStateToProps, {logOutThunk})(Header);