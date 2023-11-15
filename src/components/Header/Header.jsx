
import React from 'react';
import './Header.css';
import crito_logo from '../../Assets/Images/Logo.svg'
import {NavLink} from 'react-router-dom'



const Header = () => {
    return (
        <header>
            <div className="Container">
               <img src={crito_logo} />
                <div className="bigbox">
                    <div className="topbox">
                        <div className="contact">
                            <p><i className="fa-solid fa-phone-volume"></i>
                                +46 (8) 121 470 50</p>
                            <p><i className="fa-regular fa-envelope"></i>
                                info@crito.com</p>
                            <p><i className="fa-solid fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM</p>
                        </div>
                        <div className="socialmedia">
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="bottombox">
                        <div className="menubuttons">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/Service">Service</NavLink>
                            <NavLink to="/News">News</NavLink>
                            <NavLink to="/Contact">Contact</NavLink>
                        </div>
                            <a className="loginButton" href="#">
                            Login<i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header