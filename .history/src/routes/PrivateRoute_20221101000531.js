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
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Please_log_in_image.png/1280px-Please_log_in_image.png"
                            className={{ height: "30px" }}
                        />
                    </div>
                </Container>
            </>
        );
    }
    return <>{props.children}</>;
};
export default PrivateRoute;
