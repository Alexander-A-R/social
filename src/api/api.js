import * as axios from "axios";

const users = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users?',
    withCredentials: true
});

const follow = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    withCredentials: true,
    headers: {
        'API-KEY': '5170ddf0-5e94-4935-a002-8e3f61ee70c4'
    }
});

export const usersApi = {

    getUsers(pageSize, currentPage) {
        return users.get(`count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },

    followUser(id) {
        return follow.post(String(id))
            .then(response => response.data.resultCode);
    },

    unfollowUser(id) {
        return follow.delete(String(id))
            .then(response => response.data.resultCode);
    }
};

const statusRequest = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '5170ddf0-5e94-4935-a002-8e3f61ee70c4'
    }
});

export const profileApi = {
    getProfile(id) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => response.data);
    },

    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
            .then(response => response.data);
    },

    putStatus(status) {
        return statusRequest.put('https://social-network.samuraijs.com/api/1.0/profile/status', {status: status})
    }
};

export const authApi = {
    authMe() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data.data;
                }
                else return null;
            });
    },

    authLogin(email, password, rememberMe = false) {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
            email,
            password,
            rememberMe
        }, {
            withCredentials: true,
            headers: {
                'API-KEY': '5170ddf0-5e94-4935-a002-8e3f61ee70c4'
            }
        });
    },

    authLogout() {
        return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login', {
            withCredentials: true,
            headers: {
                'API-KEY': '5170ddf0-5e94-4935-a002-8e3f61ee70c4'
            }
        });
    }
};