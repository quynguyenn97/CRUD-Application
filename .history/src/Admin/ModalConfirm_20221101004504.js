import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../services/apiServices";
import { useTranslation, Trans } from "react-i18next";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
        props;
    const { t, i18n } = useTranslation();

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
                <Modal.Title>{t("modaldelete.title1")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {t("modaldelete.title2")} </br>
                Email: {dataUserDelete.email}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    {t("modaldelete.title3")}
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleSubmiDeleteUser()}>
                    {t("modaldelete.title4")}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ModalConfirm;
