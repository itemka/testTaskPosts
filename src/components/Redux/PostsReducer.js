import {PostAPI} from "../../API/API";

const GET_FIRST_POSTS = `APP/POSTS/GET_FIRST_POSTS`;
const GET_NEXT_POSTS = `APP/POSTS/GET_NEXT_POSTS`;
const INCREMENT = `APP/POSTS/INCREMENT`;
const REQUEST_RETURN = `APP/POSTS/REQUEST_RETURN`;

const getFirstPartOfPostAction = firstPosts => ({type: GET_FIRST_POSTS, firstPosts});
const getNextPartOfPostAction = nextPosts => ({type: GET_NEXT_POSTS, nextPosts});
const incrementAction = () => ({type: INCREMENT});
// const requestReturnAction = (loading) => ({type: REQUEST_RETURN, loading});

export const getFirstPartOsPostThunk = pageNumber => dispatch => {
    // dispatch(requestReturnAction(false));
    let getPosts = PostAPI.getPartOfPost(pageNumber).then(data => {
        // dispatch(requestReturnAction(true));
        dispatch(getFirstPartOfPostAction(data));
    });
    return getPosts;
};

export const getNextPartOfPostThunk = pageNumber => dispatch => {
    // dispatch(requestReturnAction(false));
    let getPosts = PostAPI.getPartOfPost(pageNumber).then(data => {
        // dispatch(requestReturnAction(true));
        dispatch(incrementAction());
        dispatch(getNextPartOfPostAction(data))
    });
    return getPosts;
};

let initialState = {
    posts: [],
    currentPage: 1,
    requestReturn: false
};

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_POSTS:
            return {
                ...state,
                posts: action.firstPosts
            };
        case GET_NEXT_POSTS:
            return {
                ...state,
                posts: [...state.posts.map(item => ({...item})), ...action.nextPosts]
            };
        case INCREMENT:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case REQUEST_RETURN:
            return {...state, requestReturn: action.loading};
        default: {
            return state;
        }
    }
};
export default PostsReducer;