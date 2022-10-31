import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalStarted = (props) => {
    const { show, handleClose } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CRUD APP Description:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>
                        Use API from website: https://reqres.in/ to create app.
                        Use React Library to create simple app include: 1. Login
                        2. Logout 3. Add User 4. Edit User 5. Delete User 6.
                        Read All User 7. Search User by email 8. Sort by
                        FirstName, Id 9. Import User from file .csv 10. Export
                        User to file .csv 11. Change language
                    </span>
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
