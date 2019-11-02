let initialState = {
    posts : [],
    email: null,
    login: null,
    isAuth: false,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
export default LoginReducer;