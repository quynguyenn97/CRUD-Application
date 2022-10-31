import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putEditUser } from "../services/apiServices";
import { useTranslation, Trans } from "react-i18next";
import { toast } from "react-toastify";
const ModalEditUser = (props) => {
    const { handleClose, show, dataUserEdit, handleEditUserFromModal } = props;
    const [name, setName] = useState("");
    const { t, i18n } = useTranslation();
    const [job, setJob] = useState("");
    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
        }
    }, [dataUserEdit]);

    const handleSubmitEditUser = async () => {
        let res = await putEditUser(name, job);
        if (res && res.name) {
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id,
            });
            handleClose();
            toast.success("Update user Success");
        } else {
            toast.error("Error..");
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("modaledit.title1")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>{t("modaledit.title2")}</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        {t("modaledit.title3")}
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitEditUser()}>
                        {t("modaledit.title4")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalEditUser;
