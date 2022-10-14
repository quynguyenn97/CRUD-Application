import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.scss";
import { loginApi } from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loadingAPI, setLoadingAPI] = useState(false);
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, []);
    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/password is required!!");
            return;
        }
        setLoadingAPI(true);
        let res = await loginApi(email, password);
        console.log(res);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            navigate("/");
        } else {
            // error
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
        }
        setLoadingAPI(false);
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
