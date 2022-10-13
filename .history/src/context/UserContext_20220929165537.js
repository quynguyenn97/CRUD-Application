import React from "react";
import { ReactDOM } from "react";
// @function  UserContext
const UserContext = React.createContext({ name: "", auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ email: "", auth: false });

    const login = (email) => {
        setUser((user) => ({
            email: email,
            auth: true,
        }));
    };

    const logout = () => {
        setUser((user) => ({
            email: "",
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
