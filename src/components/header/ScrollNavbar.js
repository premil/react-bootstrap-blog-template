import '../../styles/components-css/header/scrollnavbar.css';
import '../../styles/components-css/header/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../button/Button';
import $ from 'jquery';
import SignINModal from '../../models/Signin';

function ScrollNavbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    /* ===================================== */
    /* ======= Signin Modal useState ======= */

    const [showSignIn, setShowSignIn] = useState(false);            /* showSignin "controller" */
    const closeSignin = () => setShowSignIn(false);


    /* ===================================== */
    /* ======= Scroll Navbar function ======= */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scroll-navbar').slideDown({ 'height': '50px' });
        } else {
            $('.scroll-navbar').slideUp({ 'height': '0px' });
        }
    });


    return (
        <>
            <nav className="scroll-navbar">
                <div className="navbar-container">
                    <div className="nav-logo">
                        <span className='logo-name'>SL Travel</span>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>   {/* mobile responce menu icon */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                                to='/'
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/'
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Get Start
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/'
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Gallary
                            </Link>
                        </li>
                    </ul> {/* nav-menu */}
                    <div className="log-in">
                        <div className="sign-in">
                            <Link to='/'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn-black-curve'
                                    buttonSize='btn-small'
                                    onClick={() => setShowSignIn(true)}        /* show Signin Modal */
                                >
                                    Sign IN
                                </Button>
                            </Link>
                        </div>
                        <div className="sign-up">
                            <Link to='/NewAccount'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn-black-curve'
                                    buttonSize='btn-small'
                                >
                                    Sign UP
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>  {/* scroll-navbar-container */}
            </nav> {/*  scroll-down-navbar */}

            <SignINModal                                    /* Pass the props ==>> SigninModal */
                modal_Show={showSignIn}
                modal_Hide={closeSignin}
            />
        </>
    );
}

export default ScrollNavbar;
