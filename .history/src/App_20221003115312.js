import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/UserACtion";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
        }
    }, []);
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
