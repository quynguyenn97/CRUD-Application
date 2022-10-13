import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Alert from "react-bootstrap/Alert";

const PrivateRoute = (props) => {
    const { user } = useContext(UserContext);
    if (user && !user.auth) {
        return (
            <>
                <Alert
                    variant="danger"
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>You don't have permisson to acess this route</p>
                </Alert>
            </>
        );
    }
    return <>{props.children}</>;
};
export default PrivateRoute;
