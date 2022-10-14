const HomePage = () => {
    return (
        <div className="home-container">
            <div className="mt-3">
                Yêu cầu:
                <br />
                -Sử dụng API từ trang web https://reqres.in/ để tạo website.
                <div>
                    -Sử dụng thư viện React để tạo một màn hình website cơ bản
                    bao gồm các chức năng:
                </div>
                <br />
                <ul>
                    <li>1. Đăng nhập</li>
                    <li>2. Thêm User</li>
                    <li>3. Sửa User</li>
                    <li>4. Xoá User</li>
                    <li>5. Hiển thị tất cả các User</li>
                    <li>6. Tìm kiếm User theo Id</li>
                    <li>7. Sắp xếp theo FirstName</li>
                    <li>8. Import User từ file .csv</li>
                    <li>9. Export User ra file .csv</li>
                    <li></li>
                </ul>
                Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học
                và đẹp. Commit và đẩy source code lên github public. Triển khai
                website lên Heroku để demo.
            </div>
        </div>
    );
};
export default HomePage;
