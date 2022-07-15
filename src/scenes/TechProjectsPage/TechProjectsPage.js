import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import HyperloopPage from './scenes/HyperloopPage/HyperloopPage';
import RoboSubPage from './scenes/RoboSubPage/RoboSubPage';
import QuantumPaperPage from './scenes/QuantumPaperPage/QuantumPaperPage';
import EthicalAIPaperPage from './scenes/EthicalAIPaperPage/EthicalAIPaperPage';
import DafinitePaperPage from './scenes/DafinitePaperPage/DafinitePaperPage';
import FourOhFourPage from '../404Page/404Page';

import HyperloopPic from './Hyperloop.png';
import RoboSubPic from './RoboSub.jpg';
import SaniBotPic from './SaniBot.jpg';
import QuantumPic from './Quantum.jpg';
import EthicalAIPic from './EthicalAI.jpg';
import DafinitePic from './Dafinite.jpg';
import DranzleyderPic from './Dranzleyder.jpg';
import WWWPic from './WWW.png';
import WebsitePic from './Website.jpg';
import SuperMIDIoBrosPic from './SuperMIDIoBros.png';

import ProjectCard from './components/ProjectCard';
import './TechProjectsHomePage.css';
import '../../common.css';

function TechProjectsPage(props) {
    return (
        <Switch>
            <Route exact path={props.match.url+"/"} component={TechProjectsHomePage} />
            <Route path={props.match.url+"/hyperloop"} component={HyperloopPage} />
            <Route path={props.match.url+"/robosub"} component={RoboSubPage} />
            <Route path={props.match.url+"/quantum-decoherence"} component={QuantumPaperPage} />
            <Route path={props.match.url+"/ethical-ai"} component={EthicalAIPaperPage} />
            <Route path={props.match.url+"/dafinite"} component={DafinitePaperPage} />
            <Route path={props.match.url+"/*"} component={FourOhFourPage} />
        </Switch>
    );
}

export default TechProjectsPage;




function TechProjectsHomePage(props) {
    const [loading, setLoading] = useState(true);

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    return (
        <>
        <Helmet>
            <title>Ben Manley | Tech Projects</title>
            <meta name="description" content="Check out the projects I've worked on, from 
                robotics and embedded systems to web development." />
        </Helmet>
        <div id="projects-header-bkgd" />
        <div id="projects-page" style={loading ? {} : {animationName: "projects-page-entrance"}}>
            <div style={{flexBasis: "100%"}}>
                <div className="header-spacer" />
                <div id="projects-title">Here's what I've built.</div>
            </div>
            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={HyperloopPic}
                title="Michigan Hyperloop"
                categories="Embedded Systems, Real-Time Programming, Management"
                years="2017-2019"
                roles="Student Team - Controls/Software Lead"
                description={<>
                    The computer system and sensor array for a high-speed vehicle
                    competing in SpaceX's Hyperloop Pod Competition.
                </>}
                linkInternal={true}
                link={props.match.url+"/hyperloop"}
            />

            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={RoboSubPic}
                title="Michigan Robotic Submarine"
                categories="Embedded Systems, Real-Time Programming, Autonomy, Management"
                years="2020-2021"
                roles="Student Team - Co-Founder, Software Lead"
                description={<>
                    The control/navigation software for an autonomous underwater
                    vehicle competing in RoboNation's RoboSub Competition.
                </>}
                linkInternal={true}
                link={props.match.url+"/robosub"}
            />

            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={DafinitePic}
                title="Dafinite"
                categories="Automatic Verification, Distributed Systems, Research"
                years="2021"
                roles="Graduate Course Research Project"
                description={<>
                    Finitization of Dafny protocols to enable model checking 
                    of Dafny-implemented distributed programs.
                </>}
                linkInternal={true}
                link={props.match.url+"/dafinite"}
            />

            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={SaniBotPic}
                title="SaniBot"
                categories="Embedded Systems, Real-Time Programming, Autonomy"
                years="2021"
                roles="Senior Design Project"
                description={<>
                    A robot that autonomously explores, maps, and segments a space and
                    sanitizes objects with a UV light.
                </>}
                linkInternal={false}
                link={"https://www.youtube.com/watch?v=pCWeux1shXc"}
            />

            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={QuantumPic}
                title="Quantum Decoherence"
                categories="Quantum Computing"
                years="2021"
                roles="Term Paper"
                description={<>
                    Final paper for EECS 598: Quantum Information, Probability, and Computing.
                </>}
                linkInternal={true}
                link={props.match.url+"/quantum-decoherence"}
            />

            <ProjectCard
                loading={loading} imgLoaded={imgLoaded}
                bkgdSrc={EthicalAIPic}
                title="Ethical AI Development"
                categories="AI"
                years="2022"
                roles="Term Paper"
                description={<>
                    Final paper for UMich's EECS 598: Ethics of AI and Robotics.
                </>}
                linkInternal={true}
                link={props.match.url+"/ethical-ai"}
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={WebsitePic}
                title="Personal Website"
                categories="Design, Web Development"
                years="2020"
                roles="Independent"
                description={<>
                    This website - a React app, built and styled from scratch.
                </>}
                linkInternal={false}
                link="https://github.com/thisisbenmanley/personal-website#ben-manleys-personal-website"
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={DranzleyderPic}
                title="The Dranzleyder"
                categories="Browser Extension, Web Development"
                years="2020"
                roles="Independent"
                description={<>
                    A browser extension I made as a joke, live on the Chrome Web Store,
                    that translates all text on a given webpage to a "softer" pronunciation.
                </>}
                linkInternal={false}
                link="https://github.com/thisisbenmanley/dranzleyder"
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={WWWPic}
                title="Warmer Winter Walks"
                categories="User Interfaces, Web Development"
                years="2020"
                roles="Course Project"
                description={<>
                    An interactive-map React app that provides routes between
                    locations on Michigan's North Campus.
                </>}
                linkInternal={false}
                link="https://github.com/montanamott/warmer-winter-walks#warmer-winter-walks"
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={SuperMIDIoBrosPic}
                title="Super MIDIo Bros"
                categories="Miscellaneous"
                years="2018"
                roles="Hackathon Team Member"
                description={<>
                    A controller for Super Mario Bros Level 1-1 using a MIDI Keyboard.
                    Made for MHacks 11.
                </>}
                linkInternal={false}
                link="https://devpost.com/software/super-midio-bros-pno9rv"
            />
        </div>
        </>
    );
}