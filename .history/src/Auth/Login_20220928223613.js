import React, { useState } from "react";
import "./Login.scss";

const Login = (props) => {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <span>Email address</span>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <span>Password</span>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
            <button>s</button>
        </div>
    );
};
export default Login;
