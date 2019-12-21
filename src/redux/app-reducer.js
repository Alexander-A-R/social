import {getAuthUserData} from "./auth-reducer";

const INITIAL_APP_SUCCESS = 'INITIAL-APP-SUCCESS';

const initialState = {
    initialApp: false
};

const initialAppSuccess = () => ({type: INITIAL_APP_SUCCESS});

export const initializeApp = () => dispatch => {
    dispatch(getAuthUserData())
        .then(() => dispatch(initialAppSuccess()));
};

export const getInitialApp = state => {
    return state.app.initialApp;
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIAL_APP_SUCCESS:
            return {
                ...state,
                initialApp: true
            };
        default:
            return state;
    }
};

export default appReducer;