import React from "react";
import { ReactDOM } from "react";
// @function  UserContext
const UserContext = React.createContext({ name: "", auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ email: "", auth: false });

    const loginContext = (email) => {
        setUser((user) => ({
            email: email,
            auth: true,
        }));
        localStorage.setItem("token", res.token);
        navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser((user) => ({
            email: "",
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
