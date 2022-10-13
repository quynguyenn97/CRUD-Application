import {
    FETCH_USER_LOGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from "../actions/UserAction";
const INITIAL_STATE = {
    account: {
        email: "",
        auth: false,
        token: "",
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
            console.log(">>>check action", action);
            return {
                ...state,
                email: action.data.email,
                token: action.data.token,
                auth: true,
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                auth: false,
            };
        default:
            return state;
    }
};
export default userReducer;
