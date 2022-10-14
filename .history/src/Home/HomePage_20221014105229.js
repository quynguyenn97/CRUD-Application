const HomePage = () => {
    return (
        <div className="home-container">
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
                <li>8. Sắp xếp theo FirstName</li>
                <li>9. Import User from file .csv</li>
                <li>10. Export User to file .csv</li>
            </ul>
            Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và
            đẹp. Commit và đẩy source code lên github public. Triển khai website
            lên Heroku để demo.
        </div>
    );
};
export default HomePage;
