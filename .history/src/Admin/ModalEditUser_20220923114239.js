import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putEditUser } from "../services/apiServices";
import { toast } from "react-toastify";
const ModalEditUser = (props) => {
    const { handleClose, show, handleUpdateUser } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSubmitEditUser = async () => {
        let res = await putEditUser(name, job);
        console.log(res);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cap nhat thong tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Job</label>
                            <input
                                type="text"
                                className="form-control"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitEditUser()}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalEditUser;
