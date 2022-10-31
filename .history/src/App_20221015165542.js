import "./App.scss";
import Header from "./Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/UserAction";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
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
                <AppRoutes />
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
            </div>
        </>
    );
};

export default App;
