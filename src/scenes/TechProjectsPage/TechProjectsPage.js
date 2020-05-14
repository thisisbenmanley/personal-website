import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import HyperloopPage from './scenes/HyperloopPage/HyperloopPage';
import FourOhFourPage from '../404Page/404Page';

import HyperloopPic from './Hyperloop.png';
import RoboSubPic from './RoboSub.jpg';
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
            <Route path={props.match.url+"/*"} component={FourOhFourPage}/>
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
                roles="Controls/Software Lead"
                description={<>
                    The computer system and sensor array for a high-speed vehicle
                    competing in SpaceX's Hyperloop Pod Competition.
                </>}
                linkInternal={true}
                link={props.match.url+"/hyperloop"}
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={RoboSubPic}
                title="Michigan Robotic Submarine"
                categories="Embedded Systems, Real-Time Programming, Management"
                roles="Software Lead"
                description={<>
                    The control/navigation software for an autonomous underwater
                    vehicle competing in RoboNation's RoboSub Competition.
                </>}
                linkInternal={true}
                link={props.match.url+"/robosub"}
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={WWWPic}
                title="Warmer Winter Walks"
                categories="User Interfaces, Web Development"
                roles="Team Member"
                description={<>
                    An interactive-map React app that provides routes between
                    locations on Michigan's North Campus.
                </>}
                linkInternal={false}
                link="https://github.com/montanamott/warmer-winter-walks#warmer-winter-walks"
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={WebsitePic}
                title="Personal Website"
                categories="Design, Web Development"
                roles="Independent"
                description={<>
                    This website - a React app, built and styled from scratch.
                </>}
                linkInternal={false}
                link="https://github.com/thisisbenmanley/personal-website#my-personal-website"
            />

            <ProjectCard
                loading={loading}
                bkgdSrc={SuperMIDIoBrosPic}
                title="Super MIDIo Bros"
                categories="Miscellaneous"
                roles="Hackathon Team Member"
                description={<>
                    A controller for Super Mario Bros Level 1-1 using a MIDI Keyboard.
                    Made for MHacks 11.
                </>}
                linkInternal={true}
                link={props.match.url+"/super-midio-bros"}
                // https://github.com/eashwar/super-midio-bros#super-midio-bros
                // https://www.youtube.com/watch?v=cunnLp3Ipi8
            />
        </div>
        </>
    );
}

// Michigan Hyperloop
// Michigan Robotic Submarine
// Warmer Winter Walks
// This Website
// Super MIDIo Bros