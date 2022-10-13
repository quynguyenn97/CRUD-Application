import videoHomepage from "../assets/video.mp4";
import Sidebar from "../Admin/SideBar";
import { useState } from "react";

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleShowHide = () => {
        setCollapsed(true);
    };
    return (
        <div>
            {/* <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video> */}
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>
        </div>
    );
};
export default HomePage;
