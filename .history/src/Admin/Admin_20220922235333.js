import Sidebar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import TableUser from "./TableUser";
import ModalAddNew from "./ModalAddNew";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleShowHide = () => {
        setCollapsed(true);
    };
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false);
    };
    const handleAddNewUser = () => {
        setIsShowModalAddNew(true);
    };
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>
            <div className="admin-content container">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
                <div className="my-3 d-flex justify-content-between">
                    <span>List Users:</span>
                    <button
                        className="btn btn-success"
                        onClick={() => handleAddNewUser()}>
                        Add hoc sinh
                    </button>
                </div>
                <TableUser />
            </div>
            <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};
export default Admin;
