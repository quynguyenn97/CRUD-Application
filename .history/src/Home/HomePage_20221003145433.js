import videoHomepage from "../assets/video.mp4";
const HomePage = () => {
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
