import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";

const PrivateRoute = (props) => {
    const user = useSelector((state) => state.user.account);
    const { t, i18n } = useTranslation();

    if (user && !user.auth) {
        return (
            <>
                <Container>
                    <Alert variant="danger" className="mt-3">
                        <Alert.Heading>{t("private.title1")}</Alert.Heading>
                        <p>{t("private.title2")}</p>
                        <p>{t("private.title3")}</p>
                    </Alert>
                </Container>
            </>
        );
    }
    return <>{props.children}</>;
};
export default PrivateRoute;
