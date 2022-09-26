import "react-pro-sidebar/dist/css/styles.css";
import { Navigate, useNavigate } from "react-router-dom";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
    FaCross,
    FaFacebook,
} from "react-icons/fa";
import sidebarBg from "../assets/sidebarbg.png";
import "./SideBar.scss";

const Sidebar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();
    return (
        <div>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}>
                <SidebarHeader>
                    <div
                        style={{
                            padding: "24px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: 18,
                            letterSpacing: "1px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "red",
                        }}>
                        <FaCross size={"2em"} color={"yellow"} />
                        <span>TNTT HTT</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">new</span>}>
                            dashboard
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<FaGem />} title="Quan li">
                            <MenuItem>Quan li User</MenuItem>
                            <MenuItem>Quan li Bai thi</MenuItem>
                            <MenuItem>Quan li Cau Hoi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: "center" }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: "20px 24px",
                        }}>
                        <a
                            href="https://www.facebook.com/ThieunhiHTT"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer">
                            <FaFacebook />
                            <span
                                style={{
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                }}>
                                ThieunhiHTT
                            </span>
                        </a>
                        <>
                            <button
                                className="btn btn-danger"
                                onClick={() => navigate("/")}>
                                Home
                            </button>
                        </>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
};
export default Sidebar;
