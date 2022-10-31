import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../redux/actions/UserAction";
import { useEffect } from "react";
import "./Header.scss";
import logoApp from "./assets/logoApp";

const Header = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.account);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(handleLogoutRedux());
    };

    useEffect(() => {
        if (
            user &&
            user.auth === false &&
            window.location.pathname !== "/login"
        ) {
            navigate("/");
            toast.success("Log out success");
        }
    }, [user]);
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        <div className="header-brand">
                            <img
                                src={logoApp}
                                width="30"
                                height="30"
                                className="d-inline-block align-top "
                                alt="React Bootstrap logo"
                            />
                            <span>&nbsp;CRUD Application</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {((user && user.auth) ||
                            window.location.pathname === "/") && (
                            <>
                                <Nav className="me-auto">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                    <Link className="nav-link" to="/users">
                                        Manage Users
                                    </Link>
                                </Nav>

                                <Nav>
                                    {user && user.email && (
                                        <span className="nav-link">
                                            {" "}
                                            Welcome <b>{user.email}</b>!
                                        </span>
                                    )}
                                    <NavDropdown
                                        title="Settings"
                                        className="mx-0 mx-lg-3">
                                        {(user && user.auth === false) ||
                                        user.auth === null ? (
                                            <Link
                                                className="dropdown-item"
                                                to="/login"
                                                style={{ color: "black" }}>
                                                Login
                                            </Link>
                                        ) : (
                                            <NavDropdown.Item
                                                onClick={() => handleLogout()}
                                                className="w-md-100 w-30">
                                                Logout
                                            </NavDropdown.Item>
                                        )}
                                    </NavDropdown>
                                </Nav>
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
