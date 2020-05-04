import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderMenuItem.css';

function HeaderMenuItem(props) {
    return(
        <span className="menu-item-container" style={{animationDelay: props.order*0.2+0.3+"s"}}>
            <NavLink
                to={props.link}
                className="menu-item"
                activeClassName="menu-item-active">
                    {props.text}
            </NavLink>
        </span>
    );
}

export default HeaderMenuItem;