import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import Logo from './Logo.png';
import Team from './Team.jpg';
import Tube from './Tube.jpg';
import Pod from './Pod.png';
import System from './System.jpg';
import States from './States.jpg';

import './HyperloopPage.css';
import '../../../../common.css';

function HyperloopPage() {
    return (
        <>
        <div id="loop-header-bkgd" />
        <img src={Logo} className="loop-logo" />
        <div className="loop-page">
            {/* <div className="header-spacer" /> */}
            <div className="loop-top">
                <img src={Team} alt="project top picture" />
                <div className="loop-top-inner">
                    <div className="loop-top-inner-top">
                        <NavLink to="/projects" className="loop-back-button">
                            <FaChevronLeft />
                            <div className="loop-back-text">&nbsp;Back</div>
                        </NavLink>
                        <h1 className="loop-title">Michigan Hyperloop</h1>
                        <div className="loop-top-inner-spacer" />
                    </div>
                    <div className="loop-top-text">
                        was an engineering design team at the University of Michigan.
                        We designed, manufactured, and tested vehicles to compete in{" "}
                        <a href="https://www.spacex.com/" className="link-style">SpaceX</a>'s
                        annual <a href="https://www.spacex.com/hyperloop" className="link-style">Hyperloop Pod Competition</a>.
                    </div>
                </div>
            </div>

            <div className="loop-main">
                <div className="loop-li-container">
                    <div className="loop-li loop-li-imgIsLeft">
                        <div className="loop-li-imgdiv"><img src={Tube} alt="hyperloop tube pic" /></div>
                        <div className="loop-li-text">
                            The Hyperloop concept was first{" "}
                            <a href="https://www.spacex.com/sites/spacex/files/hyperloop_alpha.pdf" className="link-style">introduced</a>{" "}
                            in 2013: have a train levitate in a vacuum tube, removing wheel friction and
                            air friction. SpaceX built a mile-long vacuum tube and established a competition for
                            university teams to develop Hyperloop pods with a single criterium: the highest speed wins.
                        </div>
                    </div>
                </div>
                <div className="loop-li-container">
                    <div className="loop-li loop-li-imgIsRight">
                        <div className="loop-li-text">
                            I worked as a Controls Engineer and Controls Subteam Lead on Michigan's team
                            for 2 1/2 years. I managed up to <b>a dozen engineers at a time</b> to
                            develop the computer system and sensor array necessary for our Pod to autonomously
                            accelerate to a design speed ranging between <b>150 and 300 mph</b>.    
                        </div>
                        <div className="loop-li-imgdiv"><img src={Pod} alt="hyperloop pod pic" /></div>
                    </div>
                </div>
                <div className="loop-li-container">
                    <div className="loop-li loop-li-imgIsLeft">
                        <div className="loop-li-imgdiv"><img src={System} alt="hyperloop controls system diagram" /></div>
                        <div className="loop-li-text">
                            In my time on the team, I <b>taught myself</b> everything I needed to know
                            about embedded systems. I was in charge of software and state diagram design, sensor
                            integration, and interfacing with other Pod subsystems, as well as 
                            mentoring newer students and managing requirements, timelines, and budgets.
                        </div>
                    </div>
                </div>
                <div className="loop-li-container">
                    <div className="loop-li loop-li-imgIsRight">
                        <div className="loop-li-text">
                            The controls system included components ranging from microcontrollers and
                            radios to photoelectric sensors, accelerometers, and rotary encoders. Software
                            included state and error management, sensor communication, networking,
                            heartbeats, and GUIs. All hardware and software was fail-safe per competition requirements, and
                            I designed modular software to make development by our growing subteam easier.
                        </div>
                        <div className="loop-li-imgdiv"><img src={States} alt="hyperloop software state diagram " /></div>
                    </div>
                </div>

                <NavLink to="/projects" className="loop-bottom-back link-style">
                    <FaChevronLeft />
                    &nbsp;Back to Projects
                </NavLink>
            </div>
        </div>
        </>
    );
}

export default HyperloopPage;