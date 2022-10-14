import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import { handleRefresh } from "./redux/actions/UserAction";

const App = () => {
    return (
        <>
            <div className="App">
                <Header />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default App;
