import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import './404Page.css';
import '../../common.css';

function FourOhFourPage() {   // can't start with numbers :)
    return (
        <>
        <Helmet><title>Ben Manley | Page Not Found</title></Helmet>
        <div id="fourohfour-bkgd">404<br/>404<br/>404<br/>404<br/>404</div>
        <div id="fourohfour-message">
            Whoops!<br/>The page you tried to reach doesn't exist.<br/><br/>

            <NavLink to="/" className="link-style">Return to Home</NavLink>
        </div>
        </>
    );
}

export default FourOhFourPage;