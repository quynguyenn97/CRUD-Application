import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putEditUser } from "../services/apiServices";
import { toast } from "react-toastify";
const ModalConfirm = () => {
    const handleSubmiDeleteUser = () => {};
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirm?</Modal.Title>
            </Modal.Header>
            <Modal.Body>sdasds</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleSubmiDeleteUser()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
