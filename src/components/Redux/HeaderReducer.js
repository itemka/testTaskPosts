let initialState = {
    pageList: [
        {id: 1, pageName: 'Главная', pathToPage: '/home',},
        {id: 2, pageName: 'Новости', pathToPage: '/posts',},
        {id: 3, pageName: 'Профиль', pathToPage: '/profile',},
        {id: 4, pageName: 'Login', pathToPage: '/login',},
    ],
};

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
export default HeaderReducer;