import {authApi} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const RESET_AUTH = 'RESET-AUTH';
const SET_FETCHING = 'SET-FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const setFetching = value => ({type: SET_FETCHING, value});
export const resetAuth = () => ({type: RESET_AUTH});

export const getAuthUserData = () => (dispatch) => {
    return authApi.authMe()
        .then(data => {
            if (data) {
                const {id, email, login} = data;
                dispatch(setUserData(id, email, login));
            }
        });
};

export const loginUser = (login, password, rememberMe) => (dispatch) => {
    dispatch(setFetching(true));
    authApi.authLogin(login, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
                    .then(() => dispatch(setFetching(false)));
            }
            else {
                const error = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error.';
                dispatch(stopSubmit('login', {_error: error}));
                dispatch(setFetching(false));
            }
        });
};

export const logoutUser = () => (dispatch) => {
    authApi.authLogout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(resetAuth());
            }
        });
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
        case RESET_AUTH:
            return {
                userId: null,
                email: null,
                login: null,
                isAuth: false,
                isFetching: false,
                serverConnecting: false
            };
        default:
            return state;
    }
};

export default authReducer;