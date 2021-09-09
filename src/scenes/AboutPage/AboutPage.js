import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {FaLinkedinIn, FaGithub, FaStackOverflow, FaEnvelope} from 'react-icons/fa';

import portrait from './Ben_Manley_Portrait.jpg';
import palmIcon from './palm-icon.png';
import blockMIcon from './blockm-icon.png';
import htmlTagIcon from './html-tag-icon.png';
import filmIcon from './film-icon.png';
import workIcon from './work-icon.png';
import EarPeaceLogo from './EarPeaceLogo.png';
import './AboutPage.css';
import '../../common.css'

function AboutPage() {
    const [loading, setLoading] = useState(true);

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    useEffect(function() {
        document.body.style.overflowY = "hidden";

        return function() {
            document.body.style.overflowY = "unset";
        }
    });

    const colors = {
        "michigan": "#ffcb05",
        "cs": "#ac83ff",
        "film": "#ff4800",
        "work": "#68e85f",
        "earpeace": "#369cda"
    }

    return (
        <>
        <Helmet>
            <title>Ben Manley | About</title>
            <meta name="description" content="I'm Ben Manley, a Computer Science student 
                and filmmaker at the University of Michigan. Check out my site!" />
        </Helmet>
        <div className="about-page"
            style={loading ? {} : {animationName: "about-page-entrance"}}>

            <div id="about-header-bkgd" />
            <div id="about-header-portrait-bkgd" />

            <img className="about-portrait"
                src={portrait}
                alt="Ben Manley Portrait"
                onLoad={imgLoaded}
                style={loading ? {display: "none"} : {}} />

            <div id="about-div" style={loading ? {display: "none"} : {}}>
                <div id="about-header-spacer-logic">
                    <div className="header-spacer"/>
                </div>

                <div className="about-top">
                    <div id="about-hello">
                        <i>Hello there!</i><br/>I'm Ben Manley.
                    </div>

                    <div>
                        <div className="about-button-container">
                            <a className="about-button" href="https://www.linkedin.com/in/benjamin-manley/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn style={{color: "#0077B5"}} className="logo-svg" />
                            </a>
                            <a className="about-button" href="https://github.com/thisisbenmanley" target="_blank" rel="noopener noreferrer">
                                <FaGithub style={{color: "white"}} className="logo-svg" />
                            </a>
                            <a className="about-button" href="https://stackoverflow.com/users/11910197/thisisbenmanley?tab=profile" target="_blank" rel="noopener noreferrer">
                                <FaStackOverflow style={{color: "#F48024"}} className="logo-svg" />
                            </a>
                            <a className="about-button" href="mailto:ben@benmanley.dev" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope style={{color: "white"}} className="logo-svg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Big About-List Section */}
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={palmIcon} alt="palm tree icon" />
                        <div>
                            I was born and raised in <span className="nowrap about-emphasis">Miami, FL</span>.
                        </div>
                    </div>
                </div>
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm graduating from the <span className="about-emphasis">University of Michigan</span> in 2022 with
                            a <a style={{color: colors["michigan"]}} href="https://cse.engin.umich.edu/" className="link-style" target="_blank" rel="noopener noreferrer">Master's in Computer Science Engineering</a> and an undergraduate
                            minor in Physics.
                        </div>
                        <img src={blockMIcon} alt="block M icon" />
                    </div>
                </div>
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={htmlTagIcon} alt="html tag icon" />
                        <div>
                            I plan to explore as many topics within Computer Science as I can. So far, my <NavLink style={{color: colors["cs"]}} to="/projects" className="link-style">projects</NavLink>{" "}
                            have focused on <span className="about-emphasis">embedded systems</span>, <span className="about-emphasis">real-time programming</span>, and <span className="about-emphasis">autonomous robotics</span>, and I'm dabbling in
                            web development <span>(check <a style={{color: colors["cs"]}} href="/" className="link-style" target="_blank" rel="noopener noreferrer">this cool website</a> out!).</span>
                        </div>
                    </div>
                </div>
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm also passionate about <NavLink style={{color: colors["film"]}} to="/films" className="link-style">filmmaking</NavLink> and enjoy every step of the production
                            process. My experiences have focused on <span className="about-emphasis">directing</span>, <span className="about-emphasis">producing</span>, <span className="about-emphasis">editing</span>,
                            and <span className="about-emphasis">audio recording</span>.
                        </div>
                        <img src={filmIcon} alt="film icon" />
                    </div>
                </div>
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={workIcon} alt="work icon" />
                        <div>
                            I've completed internships developing planetary exploration technology at <a style={{color: colors["work"]}} href="https://honeybeerobotics.com" className="link-style nowrap" target="_blank" rel="noopener noreferrer">Honeybee Robotics</a>, owning core features on the router for <a style={{color: colors["work"]}} href="https://www.starlink.com/" className="link-style nowrap" target="_blank" rel="noopener noreferrer">SpaceX's Starlink</a> internet satellite system, and
                            improving Microsoft Teams in the <a style={{color: colors["work"]}} href="https://www.microsoft.com/en-us/garage/" className="link-style nowrap" target="_blank" rel="noopener noreferrer">Microsoft Garage</a>.
                        </div>
                    </div>
                </div>
                <div className="about-li-container">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            In my spare time, I'm an Ambassador and Board Member of the{" "}
                            <a style={{color: colors["earpeace"]}} href="http://www.earpeacefoundation.org/" className="link-style" target="_blank" rel="noopener noreferrer">Ear Peace: Save Your Hearing Foundation</a>.
                            Protect your ears!
                        </div>
                        <img src={EarPeaceLogo} alt="EarPeace logo" />
                    </div>
                </div>

                {/* Resume Line */}
                <div className="about-li-container">
                    <br/>
                    <div id="resume-line">
                        For more information: if you prefer crowded text on a white background, check out my <NavLink to="/resume" className="link-style">resumé</NavLink>,
                        or just{" "}
                        <a href="mailto:ben@benmanley.dev" className="link-style nowrap" target="_blank" rel="noopener noreferrer">email me</a>!
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="about-li-container">
                    <br/>
                    <div id="fun-facts">Fun Facts</div>
                    <ul id="fun-facts-list">
                        <li className="fun-facts-li">
                            I made a{" "}
                            <a href="https://www.youtube.com/watch?v=LwdD47AoS7w" className="link-style" target="_blank" rel="noopener noreferrer">TEDx talk</a>
                            {" "}in 10th grade
                        </li>
                        <li className="fun-facts-li">I've studied abroad in Hong Kong</li>
                        <li className="fun-facts-li">
                            I was a Graphic Designer / Photoshopper for UMich's satirical newspaper,{" "}
                            <a href="https://everythreeweekly.com/" className="link-style" style={{fontStyle: "italic"}} target="_blank" rel="noopener noreferrer">
                                The Every Three Weekly
                            </a>
                        </li>
                        <li className="fun-facts-li">
                            I was the photographer for the album cover of a{" "}
                            <a href="http://www.nestortorres.com/8-music/4-nestor-torres-jazz-flute-traditions" className="link-style" target="_blank" rel="noopener noreferrer">
                                Latin-Grammy-nominated Jazz album
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutPage;