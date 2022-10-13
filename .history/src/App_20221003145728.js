import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/UserAction";
import { Container } from "react-bootstrap";
import Sidebar from "./Admin/SideBar";
import { useState } from "react";

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleShowHide = () => {
        setCollapsed(true);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
        }
    }, []);
    return (
        <>
            <div className="app-container">
                <Header />
                <Sidebar collapsed={collapsed} />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default App;
