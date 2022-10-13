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

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
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
