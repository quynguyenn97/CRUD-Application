import React, { useState } from "react";
import "./Login.scss";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
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
                            className={
                                // !email || !password
                                //     ? "btn btn-secondary"
                                //     : "btn btn-primary"
                            }
                            disabled={!email || !password ? true : false}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
