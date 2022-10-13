import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/UserAction";
import { Container } from "react-bootstrap";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
        }
    }, []);
    return (
        <Container>
            <div className="app-container">
                <Header />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default App;
