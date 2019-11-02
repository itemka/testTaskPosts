import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {getFirstPartOsPostThunk, getNextPartOfPostThunk} from "../Redux/PostsReducer";
import {getCurrentPage, getIsAuth, getLoading, getPosts} from "../Redux/Selectors";
import {Redirect} from "react-router-dom";

class PostsContainer extends React.Component {
    state = {yo: false}
    componentDidMount() {
        this.props.getFirstPartOsPostThunk(this.props.currentPage);
        window.addEventListener('scroll', this.scrollFunction);
       // setTimeout(()=>{this.setState({yo: true})}, 4000);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction)
    }

    scrollFunction = () => {
        console.log(this.props.requestReturn);
        console.log(window.innerHeight + window.pageYOffset);
        console.log(document.body.offsetHeight);

        //if (this.props.requestReturn && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            this.props.getNextPartOfPostThunk(this.props.currentPage);
        }
    };

    render() {
        return (this.props.isAuth ? <Posts {...this.props} yo={this.state.yo}/> : <Redirect to={`/login`}/>);
    }
}

let mapStateToProps = state => ({
    currentPage: getCurrentPage(state),
    posts: getPosts(state),
    requestReturn: getLoading(state),
    isAuth: getIsAuth(state),
});
export default connect(mapStateToProps, {getFirstPartOsPostThunk, getNextPartOfPostThunk})(PostsContainer);