import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <>
            <div className="App">
                <Header />
                <div className="app-content">
                    <AppRoutes />
                </div>
            </div>
        </>
    );
};

export default App;
