import videoHomePage from "../assets/video-homepage.mp4";
const HomePage = () => {
    return (
        <div className="home-container relative">
            <div className="absolute"></div>
            <div className="mt-3">
                TodoList's App Description:
                <br />- Use API from website: https://reqres.in/ to create app.
            </div>
            <div>- Use React Library to create simple app include:</div>
            <ul>
                <li>1. Login</li>
                <li>2. Logout</li>
                <li>3. Add User</li>
                <li>4. Edit User</li>
                <li>5. Delete User</li>
                <li>6. Read All User</li>
                <li>7. Search User by email</li>
                <li>8. Sort by FirstName, Id</li>
                <li>9. Import User from file .csv</li>
                <li>10. Export User to file .csv</li>
            </ul>
            Source code:
            <br />
        </div>
    );
};
export default HomePage;
