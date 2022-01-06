import { apiCall } from '../../api/requests';

export const ADD_USER = 'ADD_USER';

export const loginUser = (loginData) => {
    return async (dispatch) => {
        const user = await apiCall('post', '/login', loginData);
        if (user) {
            dispatch({
                type: ADD_USER,
                user,
            });
            window.localStorage.setItem('token', user.token);
        }
    };
};
