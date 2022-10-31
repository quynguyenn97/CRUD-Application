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
                            handleClickStart();
                        }}>
                        Get started - it's free
                    </button>

                    {/* <button>Doing Quiz Now</button> */}
                </div>
            </div>

            <ModalStarted show={show} handleClose={handleClose} />
        </div>
    );
};
export default HomePage;
