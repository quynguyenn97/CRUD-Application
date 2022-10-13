import React from "react";
import App from "../App";
import { Routes, Route, Link } from "react-router-dom";
import User from "../User/User";
import Admin from "../Admin/Admin";
import HomePage from "../Home/HomePage";
import Login from "../Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
const AppRoutes = () => {
    const { user, loginContext } = useContext(UserContext);
    console.log(user);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            loginContext(
                localStorage.getItem("email"),
                localStorage.getItem("token")
            );
        }
    }, []);
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="users" element={<User />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};
export default AppRoutes;
