import { USER_LOGIN, USER_LOGOUT } from "../actions/UserAction";
const INITIAL_STATE = {
    account: {
        email: "",
        auth: false,
    },
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
                count: state.count + 1,
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                count: state.count - 1,
            };

        case USER_LOGOUT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};
export default userReducer;
