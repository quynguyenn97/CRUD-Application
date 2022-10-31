import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useTranslation, Trans } from "react-i18next";

const NotFound = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Container>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>
                        {t("notfound.title1")}Oh snap! You got an error!
                    </Alert.Heading>
                    <p>{t("notfound.title2")}Not Found Data</p>
                </Alert>
            </Container>
        </div>
    );
};
export default NotFound;
