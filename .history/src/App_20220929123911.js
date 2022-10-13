import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import User from "./User/User";
import Admin from "./Admin/Admin";
import HomePage from "./Home/HomePage";
import Login from "./Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
    const { user } = useContext(UserContext);
    console.log(">>> chekc user", user);
    return (
        <>
            <div className="app-content">
                <Header />
                <Container>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="users" element={<User />} />
                        <Route path="admins" element={<Admin />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </Container>
            </div>
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

export default App;
