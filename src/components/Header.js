import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {FaLinkedinIn, FaGithub, FaStackOverflow, FaEnvelope} from 'react-icons/fa';

import HeaderMenuItem from './HeaderMenuItem';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function clickedBurger() {
        setMenuOpen(!menuOpen);
    }
    function clickedHeaderRight() {
        if (menuOpen) setMenuOpen(false);
    }

    let burgerMenuClasses = menuOpen ? "burger-menu-icon burger-open" : "burger-menu-icon";
    let headerRightClasses = menuOpen ? "header-right header-open" : "header-right";

    return(
        <>
        <NavLink to="/about" className="my-name">Ben Manley</NavLink>
        <div className="burger-menu-icon-container">
            <FaBars onClick={clickedBurger} className={burgerMenuClasses} />
        </div>
        
        <div onClick={clickedHeaderRight} className={headerRightClasses}>
            <div className="header-right-spacer" />
            <HeaderMenuItem link="/about" text="About" order={1} />
            <HeaderMenuItem link="/projects" text="Tech Projects" order={2} />
            <HeaderMenuItem link="/films" text="Films" order={3} />
            <HeaderMenuItem link="/resume" text="Resumé" order={4} />

            <a id="first-header-icon" className="header-icon" href="https://www.linkedin.com/in/benjamin-manley/">
                <FaLinkedinIn style={{color: "#0077B5"}} className="" />
            </a>
            <a className="header-icon" href="https://github.com/thisisbenmanley">
                <FaGithub style={{color: "white"}} className="" />
            </a>
            <a className="header-icon" href="https://stackoverflow.com/users/11910197/thisisbenmanley?tab=profile">
                <FaStackOverflow style={{color: "#F48024"}} className="" />
            </a>
            <a className="header-icon" href="mailto:ben@benmanley.dev">
                <FaEnvelope style={{color: "white"}} className="" />
            </a>
        </div>
        </>
    );
}

export default Header;