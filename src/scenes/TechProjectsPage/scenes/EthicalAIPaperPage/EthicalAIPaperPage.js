import React from 'react';
import { Helmet } from 'react-helmet';

import pdf from './ethicalAI.pdf';
import '../../../../components/PdfPage.css';
import '../../../../common.css';

function EthicalAIPaperPage() {
    return (
        <>
        <Helmet>
            <title>Ben Manley | Ethical AI Development Paper</title>
            <meta name="description" content="My final paper for UMich's EECS 598: 
                Ethics of AI and Robotics" />
        </Helmet>
        <div id="pdf-page">
            <div className="header-spacer" />
            <iframe src={pdf} title="Term paper on ethical AI development" id="pdf-iframe" />
        </div>
        </>
    );
}

export default EthicalAIPaperPage;