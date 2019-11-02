export const getPageList = state => {
    return state.headerReducer.pageList;
};
export const getCurrentPage = state => {
    return state.postsReducer.currentPage;
};
export const getPosts = state => {
    return state.postsReducer.posts;
};
export const getLoading = state => {
    return state.postsReducer.requestReturn;
};