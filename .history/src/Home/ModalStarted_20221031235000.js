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
                        <p>{t("modalstart.title4")}2. Logout</p>
                        <p>3. Add User</p>
                        <p>4. Edit User</p>
                        <p>5. Delete User</p>
                        <p>6. Read All User</p>
                        <p>7. Search User by email</p>
                        <p>8. Sort by FirstName, Id</p>
                        <p>9. Import User from file .csv</p>
                        <p>10. Export User to file .csv</p>
                        <p>11. Change language</p>
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
