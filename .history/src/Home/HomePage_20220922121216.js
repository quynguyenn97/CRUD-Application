import videoHomepage from "../assets/video.mp4";
const HomePage = () => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
      </div>
      <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>  
  <div class="fb-post" 
      data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
      data-width="500"></div>
    );
};
export default HomePage;
