import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../services/apiServices";
import { toast } from "react-toastify";
import { useTranslation, Trans } from "react-i18next";

const ModalAddNew = (props) => {
    const { handleClose, show, handleUpdateUser } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const { t, i18n } = useTranslation();

    const handleCreateUser = async () => {
        let res = await postCreateUser(name, job);
        if (res && res.id) {
            handleClose();
            setName("");
            setJob("");
            toast.success("A user is created succeed!");
            handleUpdateUser({ first_name: name, id: res.id });
        } else {
            toast.error("An error...");
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("modaladdnew.title1")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>{t("modaladdnew.title2")}Name</label>
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
                        Close{t("modaladdnew.title3")}
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleCreateUser()}>
                        Create{t("modaladdnew.title4")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalAddNew;
