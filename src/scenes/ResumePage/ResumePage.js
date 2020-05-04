import React from 'react';

import pdf from './Ben_Manley_Resume.pdf';
import './ResumePage.css';

function ResumePage() {
    return (
        <iframe src={pdf} title="Ben's Resumé" id="resume-iframe" />
    );
}

export default ResumePage;