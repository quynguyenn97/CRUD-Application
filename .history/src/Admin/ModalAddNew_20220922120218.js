import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalAddNew = (props) => {
    const { handleClose, show } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleCreateUser = () => {
        console.log("name", name, "job:", job);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Them hoc sinh moi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Name"
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
                                placeholder="Job"
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
                    <Buttonss
                        variant="primary"
                        onClick={() => handleCreateUser()}>
                        Create
                    </Buttonss>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalAddNew;
