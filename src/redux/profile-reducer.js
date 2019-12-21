import {profileApi} from "../api/api";


const SET_USER_PROFILE = 'SET-USER-PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const CHANGE_POST_IMAGE = 'CHANGE-POST-IMAGE';
const SET_FETCHING = 'SET-FETCHING';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    userProfile: null,
    posts: [
        {
            id: 234,
            text: 'Honda Civic VI',
            imageUrl: 'https://a.d-cd.net/ca7c0bcs-960.jpg',
            countLikes: 17
        },
        {
            id: 345,
            text: 'Honda Civic VII Type-R',
            imageUrl: 'http://otzyvy-avtovladelcev.ru/img/auto-body-image/3214/48814.jpg',
            countLikes: 25
        }
    ],
    newPostText: '',
    newPostImage: '',
    status: '',
    isFetching: false
};

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const addPost = text => ({type: ADD_POST, text});
export const changePostImage = imageUrl => ({type: CHANGE_POST_IMAGE, imageUrl});
export const setFetching = value => ({type: SET_FETCHING, value});
export const setStatus = status => ({type: SET_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    dispatch(setFetching(true));
    profileApi.getProfile(userId)
        .then(profile => dispatch(setUserProfile(profile)))
        .finally(() => dispatch(setFetching(false)));
};

export const putStatus = (status) => (dispatch) => {
    profileApi.putStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
            else console.error('status is not settled')
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(status => dispatch(setStatus(status)));
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const post = {
                id: 123,
                text: action.text,
                imageUrl: state.newPostImage,
                countLikes: 0
            };
            return {
                ...state,
                posts: [post , ...state.posts],
                newPostText: '',
                newPostImage: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case CHANGE_POST_IMAGE:
            return {
                ...state,
                newPostImage: action.imageUrl
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export default profileReducer;