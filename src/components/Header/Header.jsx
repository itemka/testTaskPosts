import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getPageList} from "../Redux/Selectors";

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
            </div>
        );
    }
}

let mapStateToProps = state => ({pageList: getPageList(state)});
export default connect(mapStateToProps, {})(Header);