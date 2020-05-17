import React from 'react';
import { Helmet } from 'react-helmet';

import pdf from './Ben_Manley_Resume.pdf';
import './ResumePage.css';
import '../../common.css';

function ResumePage() {
    return (
        <>
        <Helmet><title>Ben Manley | Resumé</title></Helmet>
        <div id="resume-page">
            <div className="header-spacer" />
            <iframe src={pdf} title="Ben's Resumé" id="resume-iframe" />
        </div>
        </>
    );
}

export default ResumePage;