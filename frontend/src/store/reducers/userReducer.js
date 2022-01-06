import { ADD_USER } from '../actions/userActions';

const DEFAULT_STATE = {
    user: null
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
