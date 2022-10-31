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
import logoApp from "../assets/logoApp.png";
import Language from "../ultils/Language";
import { useTranslation, Trans } from "react-i18next";

const Header = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.account);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

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
                                className="d-inline-block align-top icon"
                                alt="React Bootstrap logo"
                            />
                            <span>
                                &nbsp;{t("header.title1")}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {((user && user.auth) ||
                            window.location.pathname === "/") && (
                            <>
                                <Nav className="me-auto">
                                    <Link className="nav-link" to="/">
                                        {t("header.title2")}
                                    </Link>
                                    <Link className="nav-link" to="/users">
                                        {t("header.title3")}
                                    </Link>
                                </Nav>

                                <Nav>
                                    {user && user.email && (
                                        <span className="nav-link">
                                            {" "}
                                            {t("header.title4")}{" "}
                                            <b>{user.email}</b>!
                                        </span>
                                    )}
                                    <NavDropdown
                                        title={t("header.title5")}
                                        className="mx-0 mx-lg-3">
                                        {(user && user.auth === false) ||
                                        user.auth === null ? (
                                            <Link
                                                className="dropdown-item"
                                                to="/login"
                                                style={{ color: "black" }}>
                                                {t("header.title6")}
                                            </Link>
                                        ) : (
                                            <NavDropdown.Item
                                                onClick={() => handleLogout()}
                                                className="w-md-100 w-30">
                                                {t("header.title7")}
                                            </NavDropdown.Item>
                                        )}
                                    </NavDropdown>
                                </Nav>
                            </>
                        )}
                    </Navbar.Collapse>
                    <Language></Language>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
