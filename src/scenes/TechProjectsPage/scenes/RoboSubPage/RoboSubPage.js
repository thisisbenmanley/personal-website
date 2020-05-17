import React from 'react';

import Logo from './Logo.png';
import WateryM from './WateryM.jpg';
import Working from './Working.jpg';
import ROS from './ROS.png';
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
                    <b>Founded by yours truly</b> and other members of the defunct Michigan Hyperloop team
                    (after SpaceX indefinitely postponed its annual competition), MRoboSub (
                    <a href="https://www.michiganrobosub.com/" target="_blank" rel="noopener noreferrer">website</a>
                    ) served as a project for us to tackle that involved a number of mechanical and
                    software challenges we had not previously faced.
                    </>,
                    <>
                    I work as the <b>Software Lead</b>, managing a team of engineers to develop
                    a system that navigates a pool and completes a series of competition tasks,{" "}
                    <b>all autonomously through machine learning and computer vision</b>.
                    </>,
                    <>
                    Our first year started late and was cut off short by the Coronavirus pandemic.
                    In our <b>two months</b> of focus, we took a pre-existing hardware solution,
                    outfitted it with control and CV logic connected via{" "}
                    <a href="https://www.ros.org/about-ros/" target="_blank" rel="noopener noreferrer">ROS</a>, and got our sub to maintain
                    given depths/headings and identify the first competition task (a gate) with CV.
                    </>,
                    <>
                    This coming year, as a Senior, I plan on taking on more of a mentor
                    role to ensure the team's continued success after my graduation.
                    I'm eager to see what an entire school year will yield after our
                    success from only two months.
                    </>
                ]
            }
            mainListMedia={
                [
                    <img src={Working} alt="robosub team working pic" />,
                    <img src={ROS} alt="robosub robot operating system data diagram" />,
                    <img src={CV} alt="robosub computer vision pic" />,
                    <img src={Sub} alt="robosub sub pic" />
                ]
            }
        />
    );
}

export default RoboSubPage;