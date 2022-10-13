import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
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
                                className="nav-link navdropdown-item"
                                to="/login"
                                style={{ color: "black" }}>
                                Login
                            </Link>
                            <NavDropdown.Item href="/logout">
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
