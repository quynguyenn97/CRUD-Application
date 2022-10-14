import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleLoginRedux } from "../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import "../App.scss";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const isLoading = useSelector((state) => state.user.isLoading);
    const account = useSelector((state) => state.user.account);

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/password is required!!");
            return;
        }
        dispatch(handleLoginRedux(email, password));
    };
    const handlePress = (event) => {
        if (event && event.key === "Enter") {
            handleLogin();
        }
    };
    useEffect(() => {
        if (account && account.auth === true) {
            navigate("/");
        }
    }, [account]);
    return (
        <>
            <div className="login-container col-6 col-sm-12 ">
                <h3 className="title">Login</h3>
                <span className="text">Email address (eve.holt@reqres.in)</span>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="input-2">
                    <input
                        type={isShowPassword === false ? "password" : "text"}
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handlePress(event)}
                    />
                    <i
                        className={
                            isShowPassword === true
                                ? "fa-solid fa-eye"
                                : "fa-solid fa-eye-slash"
                        }
                        onClick={() => setIsShowPassword(!isShowPassword)}></i>
                </div>

                <button
                    className={!email || !password ? "" : "active"}
                    disabled={!email || !password ? true : false}
                    onClick={() => handleLogin()}>
                    {isLoading && <i className="fa-solid fa-sync fa-spin"></i>}
                    &nbsp;Login
                </button>
                <div className="back" onClick={() => navigate("/")}>
                    <i className="fa-solid fa-angles-left">Go back</i>
                </div>
            </div>
        </>
    );
};
export default Login;
