import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const NotFound = () => {
    return (
        <div>
            <Container>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>Not Found Data</p>
                </Alert>
            </Container>
        </div>
    );
};
export default NotFound;
