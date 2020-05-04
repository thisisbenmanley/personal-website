import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaLinkedinIn, FaGithub, FaStackOverflow} from 'react-icons/fa';

import portrait from './Ben_Manley_Portrait.jpg';
import palmIcon from './palm-icon.png';
import blockMIcon from './blockm-icon.png';
import htmlTagIcon from './html-tag-icon.png';
import filmIcon from './film-icon.png';
import workIcon from './work-icon.png';
import './AboutPage.css';
import '../../components/Header.css'

function AboutPage() {
    const [loading, setLoading] = useState(true);

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    const colors = {
        "miami": "#6fb61b",
        "michigan": "#ffcb05",
        "cs": "#8392ff",
        "film": "#ff4800",
        "work": "#ffdc7c"
    }

    return (
        <div className="about-page about-page-media"
            style={loading ? {} : {animationName: "about-page-entrance"}}>

            <img className="about-portrait about-portrait-media"
                src={portrait}
                alt="Ben Manley Portrait"
                onLoad={imgLoaded}
                style={loading ? {display: "none"} : {}} />

            <div id="about-div" style={loading ? {display: "none"} : {}}>
                <div id="about-header-spacer-logic">
                    <div className="header-spacer"/>
                </div>

                <div id="about-top">
                    <div id="about-hello">
                        <i>Hello there!</i><br/>I'm Ben Manley.
                    </div>

                    <div>
                        <div className="about-button-container about-button-container-media">
                            <a className="about-button" href="https://www.linkedin.com/in/benjamin-manley/">
                                <FaLinkedinIn style={{color: "#0077B5"}} className="logo-svg" />
                            </a>
                            <a className="about-button" href="https://github.com/thisisbenmanley">
                                <FaGithub style={{color: "white"}} className="logo-svg" />
                            </a>
                            <a className="about-button" href="https://stackoverflow.com/users/11910197/thisisbenmanley?tab=profile">
                                <FaStackOverflow style={{color: "#F48024"}} className="logo-svg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Big About-List Section */}
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={palmIcon} alt="palm tree icon" />
                        <div>
                            I was born and raised in <i style={{color: colors["miami"]}} className="nowrap">Miami, FL.</i>
                        </div>
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm graduating from the <i style={{color: colors["michigan"]}}>University of Michigan</i> in 2022 with
                            a <i style={{color: colors["michigan"]}}>Master's in Computer Science Engineering</i> and an undergraduate
                            minor in Physics.
                        </div>
                        <img src={blockMIcon} alt="block M icon" />
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={htmlTagIcon} alt="html tag icon" />
                        <div>
                            I plan to explore as many topics within Computer Science as I can. <NavLink style={{color: colors["cs"]}} to="/projects" className="about-a">So far</NavLink>, I've dug deepest
                            into <i style={{color: colors["cs"]}}>embedded systems</i> and <i style={{color: colors["cs"]}}>real-time programming</i>, and I'm dabbling in
                            web development <span className="">(check <a style={{color: colors["cs"]}} href="/" className="about-a">this cool website</a> out!).</span>
                        </div>
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm also passionate about <NavLink style={{color: colors["film"]}} to="/films" className="about-a">filmmaking</NavLink> and enjoy every step of the production
                            process. My experiences have focused on <i style={{color: colors["film"]}}>directing</i>, <i style={{color: colors["film"]}}>producing</i>, <i style={{color: colors["film"]}}>editing</i>,
                            and <i style={{color: colors["film"]}}>audio recording</i>.
                        </div>
                        <img src={filmIcon} alt="film icon" />
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={workIcon} alt="work icon" />
                        <div>
                            Last summer (2019), I completed an internship with <a style={{color: colors["work"]}} href="https://honeybeerobotics.com" className="about-a nowrap">Honeybee Robotics</a> in
                            Pasadena, CA. This summer (2020), I'll be completing a virtual internship with
                            the <a style={{color: colors["work"]}} href="https://www.microsoft.com/en-us/garage/" className="about-a nowrap">Microsoft Garage</a>.
                        </div>
                    </div>
                </div>

                {/* Resume Line */}
                <div className="about-li-container about-li-container-media">
                    <div id="resume-line">
                        For more information: if you prefer crowded text on a white background, check out my <NavLink to="/resume" className="about-a">resumé</NavLink>,
                        or just{" "}
                        <a href="mailto:ben@benmanley.dev" className="about-a nowrap">email me</a>!
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="about-li-container about-li-container-media">
                    <br/><br/>
                    <div id="fun-facts">Fun Facts</div>
                    <ul id="fun-facts-list">
                        <li className="fun-facts-li">
                            I made a{" "}
                            <a href="https://www.youtube.com/watch?v=LwdD47AoS7w" className="about-a">TEDx talk</a>
                            {" "}in 10th grade
                        </li>
                        <li className="fun-facts-li">I've studied abroad in Hong Kong</li>
                        <li className="fun-facts-li">
                            I'm a Graphic Designer for UMich's satirical newspaper,{" "}
                            <a href="https://everythreeweekly.com/" className="about-a" style={{fontStyle: "italic"}}>
                                The Every Three Weekly
                            </a>
                        </li>
                        <li className="fun-facts-li">
                            I was the photographer for the album cover of a{" "}
                            <a href="http://www.nestortorres.com/8-music/4-nestor-torres-jazz-flute-traditions" className="about-a">
                                Latin-Grammy-nominated Jazz album
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;