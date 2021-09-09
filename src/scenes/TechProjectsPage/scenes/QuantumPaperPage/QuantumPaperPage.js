import React from 'react';
import { Helmet } from 'react-helmet';

import pdf from './EECS_598_Final_Project.pdf';
import './QuantumPaperPage.css';
import '../../../../common.css';

function QuantumPaperPage() {
    return (
        <>
        <Helmet>
            <title>Ben Manley | Quantum Decoherence Term Paper</title>
            <meta name="description" content="My final paper for EECS 598: 
                Quantum Information, Probability, and Computing." />
        </Helmet>
        <div id="quantum-paper-page">
            <div className="header-spacer" />
            <iframe src={pdf} title="Term paper on quantum decoherence" id="quantum-paper-iframe" />
        </div>
        </>
    );
}

export default QuantumPaperPage;