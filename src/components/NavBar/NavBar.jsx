import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useText } from "../../context/TextContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const Text = useText();
    const navigate = useNavigate();
    const { isLoggedIn, _, logout } = useAuth();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleSignUp = (route) => {
        navigate(`/${route}`)
    }
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-primary-subtle fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" >{Text.BOOKIFY}</Link>
                <button className="navbar-toggler" onClick={toggleMobileNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMobileNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/' >{Text.HOME}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/bookstore' >{Text.BOOK_STORE}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>{Text.ABOUT_US}</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" >Action</a></li>
                                <li><a className="dropdown-item" >Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>{Text.CONTACT_US}</Link>
                        </li>
                    </ul>
                    <form className="d-flex me-5">
                        <input className="form-control me-2 border-success" type="search" placeholder={Text.SEARCH_PLACEHOLDER} aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">{Text.SEARCH}</button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">

                        {
                            isLoggedIn ?
                                (
                                    <li className="nav-item">
                                        <button className="btn btn-outline-danger" onClick={logout}>{Text.LOGOUT}</button>
                                    </li>
                                ) :
                                (
                                    <>
                                        <li className="nav-item">
                                            <button className="btn btn-outline-success me-2" aria-current="page" onClick={() => { handleSignUp('login') }} >{Text.LOGIN}</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="btn btn-outline-primary" aria-current="page" onClick={() => { handleSignUp('signup') }} >{Text.SIGNUP}</button>
                                        </li>
                                    </>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;