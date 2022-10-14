import Alert from "react-bootstrap/Alert";

const NotFound = () => {
    return (
        <div>
            <Alert variant="danger" className="mt-3">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>Not Found Data</p>
            </Alert>
        </div>
    );
};
export default NotFound;
