import React from 'react';

import Logo from './Logo.png';
import Team from './Team.jpg';
import Tube from './Tube.jpg';
import Pod from './Pod.png';
import System from './System.png';
import States from './States.png';

import ProjectTemplate from '../../components/ProjectTemplate';

function HyperloopPage() {
    return (
        <ProjectTemplate
            title="Michigan Hyperloop"
            titleImgSrc={Team}
            bkgdImgSrc={Logo}
            topText={<>
                was an engineering design team at the University of Michigan.
                We designed, manufactured, and tested vehicles to compete in{" "}
                <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">SpaceX</a>'s
                annual <a href="https://www.spacex.com/hyperloop" target="_blank" rel="noopener noreferrer">Hyperloop Pod Competition</a>.
            </>}
            mainListText={
                [
                    <>
                    The Hyperloop concept was first{" "}
                    <a href="https://www.spacex.com/sites/spacex/files/hyperloop_alpha.pdf" target="_blank" rel="noopener noreferrer">introduced</a>{" "}
                    in 2013: have a train levitate in a vacuum tube, removing wheel friction and
                    air friction. SpaceX built a mile-long vacuum tube and established a competition for
                    university teams to develop Hyperloop pods with a single criterium: the highest speed wins.
                    </>,
                    <>
                    I worked as a Controls Engineer and Controls Subteam Lead on Michigan's team
                    for 2 1/2 years. I managed up to <b>a dozen engineers at a time</b> to
                    develop the computer system and sensor array necessary for our Pod to autonomously
                    accelerate to a design speed ranging between <b>150 and 300 mph</b>.  
                    </>,
                    <>
                    In my time on the team, I <b>taught myself</b> everything I needed to know
                    about embedded systems. I was in charge of software and state diagram design, sensor
                    integration, and interfacing with other Pod subsystems, as well as 
                    mentoring newer students and managing requirements, timelines, and budgets.
                    </>,
                    <>
                    The controls system included components ranging from microcontrollers and
                    radios to photoelectric sensors, accelerometers, and rotary encoders. Software
                    included state and error management, sensor communication, networking,
                    heartbeats, and GUIs. All hardware and software was fail-safe per competition requirements, and
                    I designed modular software to make development by our growing subteam easier.
                    </>
                ]
            }
            mainListMedia={
                [
                    <img src={Tube} alt="hyperloop tube pic" />,
                    <img src={Pod} alt="hyperloop pod pic" />,
                    <img src={System} alt="hyperloop controls system diagram" />,
                    <img src={States} alt="hyperloop software state diagram " />
                ]
            }
        />
    );
}

export default HyperloopPage;