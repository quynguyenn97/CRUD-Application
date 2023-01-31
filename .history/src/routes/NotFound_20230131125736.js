import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useTranslation, Trans } from "react-i18next";

const NotFound = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Container>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>{t("notfound.title1")}</Alert.Heading>
                    <p>{t("notfound.title2")}</p>
                </Alert>
                <span className="mx-auto">
                    <img
                        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
                        className="img-private "
                        alt="img-private"
                    />
                </span>
            </Container>
        </div>
    );
};
export default NotFound;
