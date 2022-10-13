import React from "react";
import App from "../App";
import { Routes, Route, Link } from "react-router-dom";
import User from "../User/User";
import Admin from "../Admin/Admin";
import HomePage from "../Home/HomePage";
import Login from "../Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import { handleRefresh } from "../redux/actions/UserAction";
import { useDispatch } from "react-redux";
const AppRoutes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
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
                        path="/admins"
                        element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
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
