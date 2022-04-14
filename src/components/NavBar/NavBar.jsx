import React from 'react';
import logo from './../../materials/logo.png';
import './NavBar.css';
const NavBar=()=>{
    return(
        <>
        <div className="nav-container">
            <div className="nav-left">
                   <img className='flash-logo' src={logo} alt="no err"/>
                   <p className="flash-logo-text">Rapid TypoClub</p>
            </div>
            <div className="nav-right">
                <a target="_blank"
                rel='noreferrer'
                className="nav-about-link"
                href="https://github.com/kamdev66">Developer</a>
            </div>
        </div>
        </>
    )

}
export default NavBar;