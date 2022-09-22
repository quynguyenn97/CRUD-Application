import videoHomepage from "../assets/video.mp4";
const HomePage = () => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FThieunhiHTT%2Fposts%2Fpfbid02EEmKUbmSGvSRiyo4sDpPZtvvBud8DVU4UUzyLo42Mnd1uamTJiSsyrhacKikVHZyl&show_text=true&width=500"
                width="500"
                height="533"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}></iframe>
        </div>
    );
};
export default HomePage;
