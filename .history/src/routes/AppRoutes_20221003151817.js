import React from "react";
import App from "../App";
import { Routes, Route, Link } from "react-router-dom";
import User from "../User/User";
import Admin from "../Admin/Admin";
import HomePage from "../Home/HomePage";
import Login from "../Auth/Login";
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import TableUser from "../Admin/TableUser";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <TableUser />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
export default AppRoutes;
