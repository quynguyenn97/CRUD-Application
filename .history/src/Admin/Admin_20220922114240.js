import Sidebar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import TableUser from "./TableUser";
import ModalAddNew from "./ModalAddNew";
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleShowHide = () => {
        setCollapsed(true);
    };
    const [show, setShow] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>
            <div className="admin-content container">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
                <div className="my-3 d-flex justify-content-between">
                    <span>List Users:</span>
                    <button className="btn btn-success">Add hoc sinh</button>
                </div>
                <TableUser />
            </div>
            <ModalAddNew />
        </div>
    );
};
export default Admin;
