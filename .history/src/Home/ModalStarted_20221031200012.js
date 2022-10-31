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
                    Use API from website: https://reqres.in/ to create app. Use
                    React Library to create simple app include:
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
