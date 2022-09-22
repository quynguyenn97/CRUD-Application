import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalAddNew = (props) => {
    const { handleClose, show } = props;

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
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Job</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalAddNew;
