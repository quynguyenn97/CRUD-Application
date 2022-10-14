import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import User from "./User/User";
import Admin from "./Admin/Admin";
import HomePage from "./Home/HomePage";
import Login from "./Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="App">
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="users" element={<User />} />

                        <Route path="admins" element={<Admin />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </div>
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
