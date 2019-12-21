import {usersApi} from "../api/api";


const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const CLEAR_USERS = 'CLEAR-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_FETCHING = 'SET-FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
};

export const follow = id => ({type: FOLLOW, id});
export const unfollow = id => ({type: UNFOLLOW, id});
export const setUsers = users => ({type: SET_USERS, users});
export const clearUsers = () => ({type: CLEAR_USERS});
export const setUsersCount = count => ({type: SET_USERS_COUNT, count});
export const setCurrentPage = number => ({type: SET_CURRENT_PAGE, number});
export const setFetching = value => ({type: SET_FETCHING, value});
export const toggleFollowing =  (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId});

export const getUsers = (pageSize = 10, page = 1) => (dispatch) => {
    dispatch(setFetching(true));
    usersApi.getUsers(pageSize, page)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
            dispatch(setCurrentPage(page));
        })
        .finally(() => dispatch(setFetching(false)));
};

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersApi.followUser(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(follow(userId));
            }
            else {
                console.log('You already followed to this user.');
            }
        })
        .finally(() => dispatch(toggleFollowing(false, userId)));
};

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersApi.unfollowUser(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollow(userId));
            }
            else {
                console.log('You already followed to this user.');
            }
        })
        .finally(() => dispatch(toggleFollowing(false, userId)));
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
                    }
                    else {
                        return user;
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false};
                    }
                    else {
                        return user;
                    }
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.number
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetching ? [...state.isFollowing, action.userId] : state.isFollowing.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export default usersReducer;