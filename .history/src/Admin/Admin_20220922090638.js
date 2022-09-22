import Sidebar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggleShowHide = () => {
    setCollapsed(true);
  };
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)} />
        asdasdasdas
      </div>
    </div>
  );
};
export default Admin;
