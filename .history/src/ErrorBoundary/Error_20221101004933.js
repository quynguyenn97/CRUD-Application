import React from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useTranslation, Trans } from "react-i18next";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Container>
                    <Alert variant="danger" className="mt-3">
                        <Alert.Heading>
                            Oh snap! You got an error!
                        </Alert.Heading>
                        <p>Something went wrong!!</p>
                    </Alert>
                </Container>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
