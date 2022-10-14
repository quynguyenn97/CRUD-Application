import { Routes, Route, Link } from "react-router-dom";

const PrivateRoute = (props) => {
    return (
        <>
            <Route path="admins" element={<Admin />} />
        </>
    );
};
export default PrivateRoute;
