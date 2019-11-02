const LOGIN = 'LOGIN';
const IS_AUTH = 'IS_AUTH';

export const logInAction = (email, password) => ({type: LOGIN, email, password});
export const isAuthAction = isAuth => ({type: IS_AUTH, isAuth});

export const logInThunk = (email, password) => dispatch => {
    if (email === "Admin" || password === "123123") {
        dispatch(logInAction(email, password));
        dispatch(isAuthAction(true))
    }
};
export const logOutThunk = () => dispatch => {
    dispatch(isAuthAction(false))
};

let initialState = {
    email: null,
    password: null,
    isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
            };
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        default: {
            return state;
        }
    }
};
export default AuthReducer;