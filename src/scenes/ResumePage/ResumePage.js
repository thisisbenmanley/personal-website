import React from 'react';

import pdf from './Ben_Manley_Resume.pdf';
import './ResumePage.css';
import '../../components/Header.css'

function ResumePage() {
    return (
        <>
        <div className="header-spacer" />
        <iframe src={pdf} title="Ben's Resumé" id="resume-iframe" />
        </>
    );
}

export default ResumePage;