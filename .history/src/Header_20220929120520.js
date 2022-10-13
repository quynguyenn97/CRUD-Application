import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        toast.success("Log out success");
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">TNTT gx.HTT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Homepage
                        </Link>
                        <Link className="nav-link" to="/users">
                            User
                        </Link>
                        <Link className="nav-link" to="/admins">
                            Admin
                        </Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings">
                            <Link
                                className="nav-link"
                                to="/login"
                                style={{ color: "black" }}>
                                Login
                            </Link>
                            <NavDropdown.Item onClick={() => handleLogout()}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;
