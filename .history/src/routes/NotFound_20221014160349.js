import Alert from "react-bootstrap/Alert";

const NotFound = () => {
    return (
        <div>
            <Alert variant="danger" className="mt-3">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>You don't have permisson to acess this route</p>
            </Alert>
        </div>
    );
};
export default NotFound;
