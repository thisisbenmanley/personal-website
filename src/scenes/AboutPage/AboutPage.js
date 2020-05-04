import React, { useState } from 'react';

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

    function imgLoaded() {
        setLoading(false);
    }

    return (
        <div className="about-page about-page-media">

            <img className="about-portrait about-portrait-media"
                src={portrait}
                alt="Ben Manley Portrait"
                onLoad={imgLoaded}
                style={loading ? {display: "none"} : {}} />

            <div id="about-div" style={loading ? {display: "none"} : {}}>
                <div id="about-header-spacer-logic">
                    <div className="header-spacer"/>
                </div>
                <div id="about-hello">
                    <strong>Hello there!</strong><br/>I'm Ben Manley.
                </div>

                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={palmIcon} alt="palm tree icon" />
                        <div>
                            I was born and raised in <strong className="nowrap">Miami, FL.</strong>
                        </div>
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm graduating from the <strong>University of Michigan</strong> in 2022 with
                            a <strong>Master's in Computer Science Engineering</strong> and an undergraduate
                            minor in Physics.
                        </div>
                        <img src={blockMIcon} alt="block M icon" />
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={htmlTagIcon} alt="html tag icon" />
                        <div>
                            I plan to explore as many topics within Computer Science as I can. So far, I've dug deepest
                            into <strong>embedded systems</strong> and <strong>real-time programming</strong>, and I'm dabbling in
                            web development <span className="">(check <a href="/" className="about-a">this cool website</a> out!).</span>
                        </div>
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsRight">
                        <div>
                            I'm also passionate about <a href="/films" className="about-a">filmmaking</a> and enjoy every step of the production
                            process. My experiences have focused on <strong>directing</strong>, <strong>producing</strong>, <strong>editing</strong>,
                            and <strong>audio recording</strong>.
                        </div>
                        <img src={filmIcon} alt="film icon" />
                    </div>
                </div>
                <div className="about-li-container about-li-container-media">
                    <div className="about-li about-li-iconIsLeft">
                        <img src={workIcon} alt="work icon" />
                        <div>
                            Last summer (2019), I completed an internship with <a href="https://honeybeerobotics.com" className="about-a nowrap">Honeybee Robotics</a> in
                            Pasadena, CA. This summer (2020), I'll be completing a virtual internship with
                            the <a href="https://www.microsoft.com/en-us/garage/" className="about-a nowrap">Microsoft Garage</a>.
                        </div>
                    </div>
                </div>
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

                Links to LinkedIn, Github, StackOverflow
            </div>
        </div>
    );
}

export default AboutPage;