import { Container } from "react-bootstrap";
import videoHomePage from "../assets/video-homepage.mp4";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import ModalStarted from "./ModalStarted";

const HomePage = () => {
    const [show, setShow] = useState(false);
    const { t, i18n } = useTranslation();
    const handleClickStart = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    return (
        <div className="homepage-container ">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4"></source>
            </video>
            <div className="homepage-content">
                <div className="title-1">{t("homepage.title1")}</div>
                <div className="title-2">{t("homepage.title2")}</div>
                <div className="title-3">
                    <button
                        onClick={() => {
                            handleClickStart;
                        }}>
                        Get started - it's free
                    </button>

                    {/* <button>Doing Quiz Now</button> */}
                </div>
            </div>
            <Container>
                {/* <div className="mt-3">
                    TodoList's App Description:
                    <br />- Use API from website: https://reqres.in/ to create
                    app.
                </div>
                <div>- Use React Library to create simple app include:</div>
                <ul>
                    <li>1. Login</li>
                    <li>2. Logout</li>
                    <li>3. Add User</li>
                    <li>4. Edit User</li>
                    <li>5. Delete User</li>
                    <li>6. Read All User</li>
                    <li>7. Search User by email</li>
                    <li>8. Sort by FirstName, Id</li>
                    <li>9. Import User from file .csv</li>
                    <li>10. Export User to file .csv</li>
                </ul>
                Source code:
                <br /> */}
            </Container>
            <ModalStarted show={handleClickStart} handleClose={handleClose} />
        </div>
    );
};
export default HomePage;
