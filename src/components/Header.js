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

    const colors = {
        // "miami": "#6fb61b",
        "michigan": "#ffcb05",
        "cs": "#ac83ff",
        "film": "#ff4800",
        "work": "#68e85f"
    }

    return(
        <>
        <div className="header-left">
            <NavLink to="/" className="my-name">Ben Manley</NavLink>
            <br id="header-left-br"/>
            <a id="first-header-icon-left" className="header-icon-left" href="https://www.linkedin.com/in/benjamin-manley/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn style={{color: "#0077B5"}} />
            </a>
            <a className="header-icon-left" href="https://github.com/thisisbenmanley" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{color: "white"}} />
            </a>
            <a className="header-icon-left" href="https://stackoverflow.com/users/11910197/thisisbenmanley?tab=profile" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow style={{color: "#F48024"}} />
            </a>
            <a className="header-icon-left" href="mailto:ben@benmanley.dev" target="_blank" rel="noopener noreferrer">
                <FaEnvelope style={{color: "white"}} />
            </a>
        </div>

        <div className="burger-menu-icon-container">
            <FaBars onClick={clickedBurger} className={burgerMenuClasses} />
        </div>
        
        <div onClick={clickedHeaderRight} className={headerRightClasses}>
            <div className="header-right-spacer" />
            <HeaderMenuItem color={colors["michigan"]} link="/" text="About" order={1} />
            <HeaderMenuItem color={colors["cs"]} link="/projects" text="Tech Projects" order={2} />
            <HeaderMenuItem color={colors["film"]} link="/films" text="Films" order={3} />
            <HeaderMenuItem color={colors["work"]} link="/resume" text="Resumé" order={4} />

            <a id="first-header-icon-mobile" className="header-icon-mobile" href="https://www.linkedin.com/in/benjamin-manley/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn style={{color: "#0077B5"}} />
            </a>
            <a className="header-icon-mobile" href="https://github.com/thisisbenmanley" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{color: "white"}} />
            </a>
            <a className="header-icon-mobile" href="https://stackoverflow.com/users/11910197/thisisbenmanley?tab=profile" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow style={{color: "#F48024"}} />
            </a>
            <a className="header-icon-mobile" href="mailto:ben@benmanley.dev" target="_blank" rel="noopener noreferrer">
                <FaEnvelope style={{color: "white"}} />
            </a>
        </div>
        </>
    );
}

export default Header;