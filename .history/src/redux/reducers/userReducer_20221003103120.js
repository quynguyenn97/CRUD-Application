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
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_USER_SUCCESS:
            console.log(">>>check action", action);
            return {
                ...state,
                account: {
                    email: action.data.email,
                    token: action.data.token,
                    auth: true,
                },
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                account: { auth: false },
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};
export default userReducer;
