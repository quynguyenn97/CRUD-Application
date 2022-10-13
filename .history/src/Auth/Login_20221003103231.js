import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleLoginRedux } from "../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loadingAPI, setLoadingAPI] = useState(false);
    const idLoading = useSelector();

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
    return (
        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <span>Email address (eve.holt@reqres.in)</span>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <span>Password</span>
                        <div className="input-2">
                            <input
                                type={
                                    isShowPassword === false
                                        ? "password"
                                        : "text"
                                }
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                onKeyDown={(event) => handlePress(event)}
                            />
                            <i
                                className={
                                    isShowPassword === true
                                        ? "fa-solid fa-eye"
                                        : "fa-solid fa-eye-slash"
                                }
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }></i>
                        </div>
                    </div>
                    <div className="btn-login">
                        <button
                            className={!email || !password ? "" : "active"}
                            disabled={!email || !password ? true : false}
                            onClick={() => handleLogin()}>
                            {loadingAPI && (
                                <i className="fa-solid fa-sync fa-spin"></i>
                            )}
                            &nbsp;Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
