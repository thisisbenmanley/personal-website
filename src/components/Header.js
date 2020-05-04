import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderMenuItem from './HeaderMenuItem';
import './Header.css';

function Header() {
    return(
        <>
        <div id="header">
            <span id="header-left">
                <NavLink to="/" className="my-name my-name-media">Ben Manley</NavLink>
            </span>
            <span id="header-right">
                <HeaderMenuItem link="/about" text="About" order={1} />
                <HeaderMenuItem link="/projects" text="Tech Projects" order={2} />
                <HeaderMenuItem link="/films" text="Films" order={3} />
                <HeaderMenuItem link="/resume" text="Resumé" order={4} />
            </span>
        </div>
        </>
    );
}

export default Header;