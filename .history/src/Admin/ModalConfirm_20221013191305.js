import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../services/apiServices";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
        props;
    const handleSubmiDeleteUser = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204) {
            handleDeleteUserFromModal(dataUserDelete);
            handleClose();
            toast.success("Delete success");
        }
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirm?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to delete this user? Email: {dataUserDelete.email}
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
