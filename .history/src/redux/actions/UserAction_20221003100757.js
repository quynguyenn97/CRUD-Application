export const USER_LOGIN = "USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";
import { toast } from "react-toastify";

const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });
        let res = await loginApi(email.trim(), password);
        if (res && res.token) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: { email, token: res.token },
            });
        } else {
            // error
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
            dispatch({ type: FETCH_USER_ERROR });
        }
    };
};
