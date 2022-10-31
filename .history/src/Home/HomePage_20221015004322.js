import videoHomePage from "../assets/video-homepage.mp4";
const HomePage = () => {
    return (
        <div className="home-container ">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4"></source>
            </video>
            
    );
};
export default HomePage;
