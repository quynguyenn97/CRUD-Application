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
                        <NavLink className="nav-link" to="/">
                            Homepage
                        </NavLink>
                        <NavLink className="nav-link" to="/users">
                            User
                        </NavLink>
                        <NavLink className="nav-link" to="/admins">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings">
                            <NavDropdown.Item href="/login">
                                Login
                            </NavDropdown.Item>
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
