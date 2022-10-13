import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.scss";
import { loginApi } from "../services/apiServices";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/password is required!!");
            return;
        }
        let res = await loginApi(email, password);
        console.log(res);
        if (res && res.token) {
            localStorage("token", res.token);
        }
    };
    return (
        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <span>Email address</span>
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
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
