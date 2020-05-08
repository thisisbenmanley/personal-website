import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderMenuItem.css';

function HeaderMenuItem(props) {
    const checkActive = (_, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const {pathname} = location;
        return pathname === props.link;
    }

    return(
        <span className="menu-item-container menu-item-container-media"
            style={{animationDelay: props.order*0.2+0.3+"s"}}>
            <NavLink
                to={props.link}
                isActive={checkActive}
                className="menu-item"
                activeStyle={{borderBottomColor: props.color}}>
                    {props.text}
            </NavLink>
        </span>
    );
}

export default HeaderMenuItem;