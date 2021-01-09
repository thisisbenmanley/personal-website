import React from 'react';

import Logo from './Logo.png';
import WateryM from './WateryM.jpg';
import Working from './Working.jpg';
import System from './System.svg';
import CV from './CV.png';
import Sub from './Sub.jpg';

import ProjectTemplate from '../../components/ProjectTemplate';

function RoboSubPage() {
    return (
        <ProjectTemplate
            title="Michigan Robotic Submarine"
            titleImgSrc={WateryM}
            bkgdImgSrc={Logo}
            topText={<>
                is an engineering design team at the University of Michigan.
                We build and program autonomous underwater vehicles (AUVs) to compete in{" "}
                <a href="https://robonation.org/" target="_blank" rel="noopener noreferrer">RoboNation</a>'s
                annual <a href="https://robonation.org/programs/robosub/" target="_blank" rel="noopener noreferrer">RoboSub Competition</a>.
            </>}
            mainListText={
                [
                    <>
                    <b>Founded by yours truly</b> and other members of the Michigan Hyperloop team, MRoboSub (
                    <a href="https://www.michiganrobosub.com/" target="_blank" rel="noopener noreferrer">website</a>
                    ) served as a project for us to tackle that involved a number of mechanical and
                    software challenges we had not previously faced.
                    </>,
                    <>
                    I've worked as the <b>Software Lead</b>, managing a team of engineers to develop
                    a system that navigates a pool and completes a series of competition tasks,{" "}
                    <b>all autonomously through machine learning and computer vision (CV)</b>.
                    </>,
                    <>
                    In our first competition season, we've developed motor control and task planning algorithms,
                    object detection CV models, and state- and error-handling logic, all
                    connected via <a href="https://www.ros.org/about-ros/" target="_blank" rel="noopener noreferrer">ROS</a>.
                    We complete pool testing to verify proper integration between our
                    independently-developed software "nodes".
                    </>,
                    <>
                    This coming year, as a Master's student, I will take on a mentor
                    role to ensure the team's continued success after my graduation.
                    I'm eager to see what this great team can produce post-pandemic
                    given our success thus far!
                    </>
                ]
            }
            mainListMedia={
                [
                    <img src={Working} alt="robosub team working pic" />,
                    <img src={CV} alt="robosub computer vision pic" />,
                    <img src={System} alt="robosub software system diagram" />,
                    <img src={Sub} alt="robosub sub pic" />
                ]
            }
        />
    );
}

export default RoboSubPage;