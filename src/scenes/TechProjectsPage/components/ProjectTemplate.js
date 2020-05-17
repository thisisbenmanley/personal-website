import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import './ProjectTemplate.css';
import '../../../common.css';

// Template for a project page. For ease of adding projects

function ProjectTemplate(props) {
    const [loading, setLoading] = useState(true);

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    let mainList = [];

    for (const [index, element] of props.mainListText.entries()) {
        let liClass = (index % 2 === 0) ? "projtemp-li-imgIsLeft" : "projtemp-li-imgIsRight";

        let leftImg = (index % 2 === 0) ?
            <div className="projtemp-li-imgdiv">{props.mainListMedia[index]}</div> : "";

        let rightImg = (index % 2 === 0) ?
            "" : <div className="projtemp-li-imgdiv">{props.mainListMedia[index]}</div>;

        mainList.push(
            <div className="projtemp-li-container">
                <div className={"projtemp-li " + liClass}>
                    {leftImg}
                    <div className="projtemp-li-text">{element}</div>
                    {rightImg}
                </div>
            </div>
        )
    }

    return (
        <>
        <Helmet><title>Ben Manley | {props.title}</title></Helmet>
        <div id="projtemp-header-bkgd" />
        <img src={props.bkgdImgSrc} alt="project logo" className="projtemp-logo"
            style={loading ? {} : {animationName: "projtemp-logo-entrance"}} />
        <div className="projtemp-page" style={loading ? {} : {animationName: "projtemp-page-entrance"}}>
            <div className="projtemp-top">
                <img src={props.titleImgSrc} onLoad={imgLoaded} alt="project top of page" />
                <div className="projtemp-top-inner">
                    <div className="projtemp-top-inner-top">
                        <NavLink to="/projects" className="projtemp-back-button">
                            <FaChevronLeft />
                            <div className="projtemp-back-text">&nbsp;Back</div>
                        </NavLink>
                        <h1 className="projtemp-title">{props.title}</h1>
                        <div className="projtemp-top-inner-spacer" />
                    </div>
                    <div className="projtemp-top-text">{props.topText}</div>
                </div>
            </div>

            <div className="projtemp-main">
                {mainList}

                <NavLink to="/projects" className="projtemp-bottom-back">
                    <FaChevronLeft />
                    &nbsp;Back to Projects
                </NavLink>
            </div>
        </div>
        </>
    );
}

export default ProjectTemplate;