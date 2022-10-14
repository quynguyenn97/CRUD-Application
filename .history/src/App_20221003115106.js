import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import { handleRefresh } from "../redux/actions/UserAction";
import { useDispatch } from "react-redux";

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
