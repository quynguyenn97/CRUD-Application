import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Login from "../Auth/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import TableUser from "../Admin/TableUser";
import { Container } from "react-bootstrap";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Container>
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
                </Container>
            </Routes>
        </>
    );
};
export default AppRoutes;
