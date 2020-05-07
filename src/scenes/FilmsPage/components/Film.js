import React, { useState, useEffect } from 'react';

import './Film.css';
import '../../../common.css'

function Film(props) {

    let [windowHeight, setWindowHeight] = useState(0);
    let [percentPastFilm, setPercentPastFilm] = useState(50);
    let filmElement;

    function updatePercentPastFilm(filmTop) {
        // filmTop represents distance (signed) from top of el to top of window
        // filmTop + 600 == 0 ==> 0%
        // filmTop == windowHeight ==> 100%
        // The 600 should be a 500 on mobile, but it still looks fine with this math
        let percentCalc = 100 * (filmTop + 600) / (windowHeight + 600);
        percentCalc = (percentCalc > 100) ? 100 : percentCalc;
        percentCalc = (percentCalc < 0) ? 0 : percentCalc;
        setPercentPastFilm(percentCalc);
    }

    function updateWindowDimensions() {
        setWindowHeight(window.innerHeight);
        if (filmElement != null) {
            updatePercentPastFilm(filmElement.getBoundingClientRect()["top"]);
        }
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
        if (filmElement != null) {
            filmElement.parentElement.addEventListener('scroll', handleScroll);
        }

        return function() {
            window.removeEventListener('resize', updateWindowDimensions);
            if (filmElement != null) {
                filmElement.parentElement.removeEventListener('scroll', handleScroll);
            }
        }
    });

    let blurCalc = (percentPastFilm >= 27 && percentPastFilm <= 73) ? "none" : "blur(4px)";

    return(
        <div ref={(el) => {filmElement = el}} className="film-main"
            style={{ filter: blurCalc, visibility: props.loading ? "hidden" : "visible" }}>
            <img onLoad={props.imgLoaded} src={props.stillSrc} className="film-still" 
                alt={"'" + props.title + "' Film Still"}/>
            <div className="film-inner">
                <div className="film-info">
                    <a href={props.videoLink} className="film-title">{props.title}</a>
                    <div className="film-roles">{props.roles}</div>
                    <div className="film-awards">{props.awards}</div>
                    <br/>
                    <div className="film-description">{props.description}</div>
                </div>
            </div>
            <div className="film-dirprod">
                Directed by {props.director}<br/>
                Produced by {props.producedBy}
            </div>
        </div>
    );
}

export default Film;