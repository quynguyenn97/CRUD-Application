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
                    <div>
                        <p>
                            Use API from website: https://reqres.in/ to create
                            app.
                        </p>
                        <p>
                            Use ReactJS, Redux-thunk, React Libraries to create
                            CRUD app include:
                        </p>
                        <p>1. Login</p>
                        <p>2. Logout</p>
                        <p>3. Add User</p>
                        <p>4. Edit User</p>
                        <p>5. Delete User</p>
                        <p>6. Read All User</p>
                        <p>7. Search User by email</p>
                        <p>8. Sort by FirstName, Id</p>
                        <p>9. Import User from file .csv</p>
                        <p>10. Export User to file .csv</p>
                        <p>11. Change language</p>
                        <p>
                            User guide: Login with email: eve.holt@reqres.in
                            Password: 123{" "}
                        </p>
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
