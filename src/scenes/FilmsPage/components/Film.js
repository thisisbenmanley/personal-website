import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

import './Film.css';
import '../../../common.css';

function Film(props) {
    console.log("Rendering <Film> for " + props.title)
    return(
        <div className="film-main"
            /*style={{ filter: props.inFocus ? "none" : "blur(4px)",
                     opacity: props.inFocus ? "1" : "0.65",
                     visibility: props.loading ? "hidden" : "visible",
                   }}>*/
            style={{visibility: props.loading ? "hidden" : "visible"}}>
            <img onLoad={props.imgLoaded} src={props.stillSrc} className="film-still" 
                alt={"'" + props.title + "' Film Still"}/>
            <div className="film-inner">
                <div className="film-info">
                    <div className="film-titleyear">
                        <div className="film-title">{props.title}</div>&nbsp;({props.year})
                    </div>
                    <div className="film-roles">{props.roles}</div>
                    <div className="film-awards">{props.awards}</div>
                    <br/>
                    <div className="film-description">{props.description}</div>
                </div>
            </div>
            <a href={props.videoLink} className="film-play"
                    style={props.loading ? {} : {animationName: "shrink-play-button"}}
                    target="_blank" rel="noopener noreferrer">
                <span style={{paddingRight: "10px"}}>Click to<br/>watch</span>
                <FaPlayCircle style={{fontSize: "250%"}} />
            </a>
            <div className="film-dirprod">
                Directed by {props.director}<br/>
                Produced by {props.producedBy}
            </div>
        </div>
    );
}

export default Film;
