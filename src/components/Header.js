import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import HeaderMenuItem from './HeaderMenuItem';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function clickedMenu() {
        setMenuOpen(!menuOpen);
    }

    let burgerMenuClasses = menuOpen ? "burger-menu-icon burger-open" : "burger-menu-icon";
    let headerRightClasses = menuOpen ?
        "header-right header-right-media header-open" :
        "header-right header-right-media";

    return(
        <>
        <NavLink to="/about" className="my-name my-name-media">Ben Manley</NavLink>
        <div className="burger-menu-icon-container">
            <FaBars onClick={clickedMenu} className={burgerMenuClasses} />
        </div>
        <div className={headerRightClasses}>
            <div className="header-right-spacer" />
            <HeaderMenuItem link="/about" text="About" order={1} />
            <HeaderMenuItem link="/projects" text="Tech Projects" order={2} />
            <HeaderMenuItem link="/films" text="Films" order={3} />
            <HeaderMenuItem link="/resume" text="Resumé" order={4} />
        </div>
        </>
    );
}

export default Header;