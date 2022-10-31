import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
    const user = useSelector((state) => state.user.account);
    if (user && !user.auth) {
        return (
            <>
                <Container>
                    <Alert variant="danger" className="mt-3">
                        <Alert.Heading>
                            Oh snap! You got an error!
                        </Alert.Heading>
                        <p>You don't have permisson to acess this route</p>
                    </Alert>
                </Container>
            </>
        );
    }
    return <>{props.children}</>;
};
export default PrivateRoute;
