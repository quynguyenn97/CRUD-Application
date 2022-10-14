import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putEditUser } from "../services/apiServices";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete } = props;
    const handleSubmiDeleteUser = () => {};
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirm?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to delete this user? email = "sadsd"
            </Modal.Body>
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
export default ModalConfirm;
