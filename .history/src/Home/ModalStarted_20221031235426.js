import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation, Trans } from "react-i18next";

const ModalStarted = (props) => {
    const { show, handleClose } = props;
    const { t, i18n } = useTranslation();

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CRUD APP Description:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>{t("modalstart.title1")}</p>
                        <p>{t("modalstart.title2")}</p>
                        <p>{t("modalstart.title3")}</p>{" "}
                        <p>{t("modalstart.title4")}</p>
                        <p>{t("modalstart.title5")}</p>
                        <p>{t("modalstart.title6")}</p>
                        <p>{t("modalstart.title7")}</p>
                        <p>{t("modalstart.title8")}</p>
                        <p>{t("modalstart.title9")}</p>
                        <p>{t("modalstart.title10")}</p>
                        <p>
                            {t("modalstart.title11")}9. Import User from file
                            .csv
                        </p>
                        <p>
                            {t("modalstart.title12")}10. Export User to file
                            .csv
                        </p>
                        <p>{t("modalstart.title13")}11. Change language</p>
                        <div className="text-readme">
                            <p>User guide:</p>
                            <p>Login with:</p>
                            <p>Email: eve.holt@reqres.in</p>
                            <p> Password: 123</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalStarted;
