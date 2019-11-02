export const getPageList = state => {
    return state.headerStore.pageList;
};
export const getCurrentPage = state => {
    return state.postsStore.currentPage;
};
export const getPosts = state => {
    return state.postsStore.posts;
};
export const getLoading = state => {
    return state.postsStore.requestReturn;
};
export const getIsAuth = state => {
    return state.authStore.isAuth;
};