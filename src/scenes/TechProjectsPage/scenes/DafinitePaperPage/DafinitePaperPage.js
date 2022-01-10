import React from 'react';
import { Helmet } from 'react-helmet';

import pdf from './dafinite.pdf';
import '../../../../components/PdfPage.css';
import '../../../../common.css';

function QuantumPaperPage() {
    return (
        <>
        <Helmet>
            <title>Ben Manley | Dafinite</title>
            <meta name="description" content="My research project for UMich's EECS 591 
                Distributed Systems: Dafinite, finitization of Dafny protocols." />
        </Helmet>
        <div id="pdf-page">
            <div className="header-spacer" />
            <iframe src={pdf} title="Graduate course research project: Dafinite" id="pdf-iframe" />
        </div>
        </>
    );
}

export default QuantumPaperPage;