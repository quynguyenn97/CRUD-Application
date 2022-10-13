import { NavDropdown } from "react-bootstrap";
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
import LogoHeader from "./assets/logo-header.png"

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
        <div className="header">
            <Navbar bg="light" variant="lg">
                <div className="logo">
                    <img src={LogoHeader}
                </div>

                <Container>
                    <div>
                        <span className="title">
                            XỨ ĐOÀN MÌNH MÁU THÁNH CHÚA KITÔ &nbsp; &nbsp;
                            &nbsp;
                        </span>
                    </div>
                    {((user && user.auth) ||
                        window.location.pathname === "/") && (
                        <>
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">
                                    TRANG CHỦ
                                </Link>
                                {/* <Link className="nav-link" to="/users">
                                    User
                                </Link> */}
                                <Link className="nav-link" to="/admins">
                                    QUẢN LÍ
                                </Link>
                            </Nav>
                        </>
                    )}

                    <Nav>
                        {user && user.email && (
                            <span className="nav-link">
                                {" "}
                                Xin chao {user.email}
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
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;
