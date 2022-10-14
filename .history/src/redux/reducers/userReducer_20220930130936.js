import { USER_LOGIN, USER_LOGOUT } from "../actions/UserAction";
const INITIAL_STATE = {
    user: {
        email: "",
        auth: false,
    },
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};
export default userReducer;
