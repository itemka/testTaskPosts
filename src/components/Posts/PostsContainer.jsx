import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {getFirstPartOsPostThunk, getNextPartOfPostThunk} from "../Redux/PostsReducer";
import {getCurrentPage, getLoading, getPosts} from "../Redux/Selectors";

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getFirstPartOsPostThunk(this.props.currentPage);
        window.addEventListener('scroll', this.scrollFunction)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction)
    }

    scrollFunction = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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
    loading: getLoading(state),
});
export default connect(mapStateToProps, {getFirstPartOsPostThunk, getNextPartOfPostThunk})(PostsContainer);