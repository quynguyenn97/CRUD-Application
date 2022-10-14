import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "./redux/actions/UserAction";
import { useEffect } from "react";
import "./Header.scss";
import { FaCross } from "react-icons/fa";

const Header = (props) => {
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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Quy Nguyen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {((user && user.auth) ||
                            window.location.pathname === "/") && (
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                                {/* <Link className="nav-link" to="/users">
                                    User
                                </Link> */}
                                <Link className="nav-link" to="/users">
                                    Manage User
                                </Link>
                            </Nav>
                        )}
                        <Nav>
                            {user && user.email && (
                                <span className="nav-link">
                                    {" "}
                                    Welcome {user.email}
                                </span>
                            )}
                            <NavDropdown title="Settings">
                                {user && user.auth === false ? (
                                    <Link
                                        className="dropdown-item"
                                        to="/login"
                                        style={{ color: "black" }}>
                                        Login
                                    </Link>
                                ) : (
                                    <NavDropdown.Item
                                        onClick={() => handleLogout()}>
                                        Logout
                                    </NavDropdown.Item>
                                )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
