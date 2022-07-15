import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

import './ProjectCard.css';
import '../../../common.css';

function ProjectCard(props) {
    let pcardInnerJSX =<>
        <img onLoad={props.imgLoaded} src={props.bkgdSrc} className="pcard-bkgd" 
            alt={props.title + " project card background picture"}/>
        <div className="pcard-gradient" />
        <div className="pcard-info">
        <div className="pcard-title">{props.title}&nbsp;</div>
            <div className="pcard-oneline">
                <div className="pcard-roles">{props.roles}&nbsp;</div>
                <div className="pcard-years">({props.years})</div>
            </div>
            {/* <div className="pcard-categories">{props.categories}</div> */}
            <br/>
            <div className="pcard-description">{props.description}</div>
        </div>
        <FaChevronRight className="pcard-linkicon" />
    </>;

    let style = {visibility: props.loading ? "hidden" : "visible"};

    let pcardJSX = props.linkInternal ?
        <NavLink style={style} to={props.link} className="pcard-main">{pcardInnerJSX}</NavLink> :
        <a style={style} href={props.link} className="pcard-main" target="_blank" rel="noopener noreferrer">{pcardInnerJSX}</a>;

    return pcardJSX;
}

export default ProjectCard;