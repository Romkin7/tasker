import { ADD_USER } from '../actions/userActions';

const DEFAULT_STATE = {
    user: { age: 0, name: '', email: '', createdAt: '', updatedAt: '' },
};

const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.user.user,
            };
        default:
            return state;
    }
};

export default userReducer;
