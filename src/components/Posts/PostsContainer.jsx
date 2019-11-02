import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {getFirstPartOfPostThunk, getNextPartOfPostThunk, setStartCurrentPage} from "../Redux/PostsReducer";
import {getCurrentPage, getIsAuth, getLoading, getPosts} from "../Redux/Selectors";

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getFirstPartOfPostThunk(this.props.currentPage);
        window.addEventListener('scroll', this.scrollFunction);
    }

    componentWillUnmount() {
        this.props.setStartCurrentPage();
        window.removeEventListener('scroll', this.scrollFunction)
    }

    scrollFunction = () => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            this.props.getNextPartOfPostThunk(this.props.currentPage);
        }
    };

    render() {
        return <Posts {...this.props}/>
    }
}

let mapStateToProps = state => ({
    currentPage: getCurrentPage(state),
    posts: getPosts(state),
    requestReturn: getLoading(state),
    isAuth: getIsAuth(state),
});
export default connect(mapStateToProps, {
    getFirstPartOfPostThunk,
    getNextPartOfPostThunk,
    setStartCurrentPage
})(PostsContainer);