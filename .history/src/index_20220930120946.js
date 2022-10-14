import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
<React.StrictMode>
        <UserProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </UserProvider>
    </React.StrictMode>
    <Provider/>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
