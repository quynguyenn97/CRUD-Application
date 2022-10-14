export const USER_LOGIN = "USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";

const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });
        let res = await loginApi(email.trim(), password);
        dispatch({
            type: FETCH_USER_SUCCESS,
            data: { email, token: res.token },
        });

        if (res && res.token) {
            loginContext(email, res.token);
            navigate("/");
        } else {
            // error
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
        }
    };
};
