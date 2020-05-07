import React, { useState, useEffect } from 'react';

import './Film.css';

function Film(props) {

    let [windowHeight, setWindowHeight] = useState(0);
    let [percentPastFilm, setPercentPastFilm] = useState(50);
    let filmElement;

    function updatePercentPastFilm(filmTop) {
        // filmTop represents distance (signed) from top of el to top of window
        // filmTop + 600 == 0 ==> 0%
        // filmTop == windowHeight ==> 100%
        let percentCalc = 100 * (filmTop + 500) / (windowHeight + 500);
        percentCalc = (percentCalc > 100) ? 100 : percentCalc;
        percentCalc = (percentCalc < 0) ? 0 : percentCalc;
        setPercentPastFilm(percentCalc);
    }

    function updateWindowDimensions() {
        setWindowHeight(window.innerHeight);
        updatePercentPastFilm(filmElement.getBoundingClientRect()["top"]);
    }

    function handleScroll() {
        if (filmElement != null) {
            updatePercentPastFilm(filmElement.getBoundingClientRect()["top"]);
        }
    }

    useEffect(function() {
        updateWindowDimensions();
        handleScroll();
        window.addEventListener('resize', updateWindowDimensions);
        window.addEventListener('scroll', handleScroll);

        return function() {
            window.removeEventListener('resize', updateWindowDimensions);
            window.removeEventListener('scroll', handleScroll);
        }
    });

    let zIndexCalc = (percentPastFilm >= 30 && percentPastFilm <= 70) ? 1 : 5;
    let opacityCalc = (percentPastFilm >= 30 && percentPastFilm <= 70) ? 0.1 : 1;

    return(
        <div ref={(filmEl) => {filmElement = filmEl}} className="film-main">
            <img src={props.stillSrc} className="film-still"
                style={{
                    // objectPosition: "0 " + percentPastFilm+"%",
                    zIndex: zIndexCalc,
                    opacity: opacityCalc
                }} />
            <div className="film-title">{props.title}</div>
            <div className="film-inner">
                <img src={props.posterSrc} className="film-poster" />
                <div className="film-info">
                    <table><tbody>
                        <tr>
                            <th>My Roles</th>
                            <td>{props.roles}</td>
                        </tr>
                        <tr>
                            <th>Director</th>
                            <td>{props.director}</td>
                        </tr>
                        <tr>
                            <th>Prod. by</th>
                            <td>{props.producedBy}</td>
                        </tr>
                    </tbody></table>
                    <br/>
                    <div className="film-description">{props.description}</div>
                </div>
                <iframe className="film-embed" src={props.embedSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
        </div>
    );
}

export default Film;