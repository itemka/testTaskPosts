import {PostAPI} from "../../API/API";

const GET_FIRST_POSTS = `APP/POSTS/GET_FIRST_POSTS`;
const GET_NEXT_POSTS = `APP/POSTS/GET_NEXT_POSTS`;
const INCREMENT = `APP/POSTS/INCREMENT`;
const REQUEST_RETURN = `APP/POSTS/REQUEST_RETURN`;
const END = `APP/POSTS/END`;
const SET_START_CURRENT_PAGE = `SET_CURRENT_PAGE`;

const getFirstPartOfPostAction = firstPosts => ({type: GET_FIRST_POSTS, firstPosts});
const getNextPartOfPostAction = nextPosts => ({type: GET_NEXT_POSTS, nextPosts});
const incrementAction = () => ({type: INCREMENT});
const requestReturnAction = (requestReturn) => ({type: REQUEST_RETURN, requestReturn});
const endAction = (end) => ({type: END, end});
export const setStartCurrentPage = () => ({type: SET_START_CURRENT_PAGE});

export const getFirstPartOfPostThunk = pageNumber => dispatch => {
    dispatch(requestReturnAction(false));
    PostAPI.getPartOfPost(pageNumber).then(data => {
        dispatch(requestReturnAction(true));
        dispatch(getFirstPartOfPostAction(data));
        dispatch(incrementAction());
    });
};

export const getNextPartOfPostThunk = pageNumber => (dispatch, getState) => {
    if (!getState().postsStore.end) {
        if (getState().postsStore.requestReturn) {
            dispatch(requestReturnAction(false));
            PostAPI.getPartOfPost(pageNumber).then(data => {
                dispatch(requestReturnAction(true));
                dispatch(incrementAction());
                dispatch(getNextPartOfPostAction(data))
            });
        }
    } else {
        dispatch(endAction(false))
    }
};

let initialState = {
    posts: [],
    currentPage: 1,
    requestReturn: true,
    end: false
};

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_POSTS:
            return {
                ...state,
                posts: action.firstPosts,
            };
        case GET_NEXT_POSTS:
            return {
                ...state,
                posts: [...state.posts.map(item => ({...item})), ...action.nextPosts],
                end: !action.nextPosts.length,
            };
        case SET_START_CURRENT_PAGE:
            return {
                ...state,
                currentPage: 1
            };
        case INCREMENT:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case REQUEST_RETURN:
            return {...state, requestReturn: action.requestReturn};
        case END:
            return {...state, end: action.end};
        default: {
            return state;
        }
    }
};
export default PostsReducer;