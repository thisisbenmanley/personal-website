// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
// import throttle from 'lodash.throttle';
import { Helmet } from 'react-helmet';

import RememberStill from './RememberStill.jpg';
import ViewPointStill from './ViewPointStill.jpg';
import MWBStill from './MWBStill.jpg';
import SocksStill from './SocksStill.jpg';
import OTAYStill from './OTAYStill.jpg';

import Film from './components/Film';
import './FilmsPage.css';
import '../../common.css';

function FilmsPage() {
    let MaginationLink = <a href="https://vimeo.com/maginationfilms" className="link-style" style={{color: "white"}} target="_blank" rel="noopener noreferrer">M-agination Films</a>
    let MWBAward1 = "Winner, Best Director in a Student Film, Hollywood Florida Film Fest 2016";
    let MWBAward2 = "Winner, Silver Award, FAME'US Int'l Film Fest Summer 2016";
    // let filmPageElement = null;
    let filmCardElements = [];

    // let throttledHandleScroll = throttle(handleScroll, 300);

    const [loading, setLoading] = useState(true);
    // const [windowHeight, setWindowHeight] = useState(0);
    //const [filmInFocus, setFilmInFocus] = useState(false);
    // let filmInFocus = [], setFilmInFocus = [];

    const filmCards = [
	<Film
            // loading={loading} inFocus={filmInFocus[0]} imgLoaded={imgLoaded}
            loading={loading} imgLoaded={imgLoaded}
            stillSrc={OTAYStill}
            title="Only Twice A Year"
            director="Carolyn and Ben Manley"
            roles="Co-Director, Co-Writer, Editor, Graphic Artist, Narrator"
            producedBy="Carolyn Manley"
            description={<>
                A family discovers a Jewish cemetery hidden within the grounds of
                a General Motors auto plant, sharing the stories of its visitors
                and exploring how this sacred resting place survived when its surroundings didn’t.
            </>}
            videoLink="https://vimeo.com/926761417?share=copy"
        />,

        <Film
            // loading={loading} inFocus={filmInFocus[0]} imgLoaded={imgLoaded}
            loading={loading} imgLoaded={imgLoaded}
            stillSrc={RememberStill}
            title="Remember."
            director="Jake Feeman"
            roles="Associate Producer, Editor"
            producedBy={MaginationLink}
            description={<>
                A high school girl returns to the site of a school shooting to 
                reclaim the legacy of her murdered best friend.
            </>}
            videoLink="https://drive.google.com/file/d/1Y2WMJIQgwBap51tsMzGWRJB5mkQKF8a2/view"
        />,

        <Film
            // loading={loading} inFocus={filmInFocus[1]}
            loading={loading}
            stillSrc={MWBStill}
            title="Most Welcome Breezes: The Story of Marion Manley"
            director="Ben and Marissa Manley"
            roles="Director, Writer, Cinematographer, Editor, Narrator"
            awards={<>
                {MWBAward1}<br/>{MWBAward2}
            </>}
            producedBy="my family"
            description={<>
                Award-winning documentary short about my great-great-aunt, 
                Marion Manley, the first female architect in South Florida.
                Made in high school with my sister.{" "}
                <a href="https://www.miamiherald.com/living/article57137568.html" className="link-style"  target="_blank" rel="noopener noreferrer">In the news.</a>
            </>}
            videoLink="https://www.youtube.com/watch?v=5BSjBLa1ElY"
        />,

        <Film
            // loading={loading} inFocus={filmInFocus[2]}
            loading={loading}
            stillSrc={ViewPointStill}
            title="View.Point"
            director="Dylan Lange"
            roles="Head of Sound / Sound Recordist"
            producedBy={MaginationLink}
            description={<>
                A damaged son must grapple with guilt and forgiveness as he
                takes advantage of a futuristic VR company’s tech in order
                to move past a traumatic experience, all the while avoiding 
                the company’s security network.
            </>}
            videoLink="https://vimeo.com/268285544"
        />,

        <Film
            // loading={loading} inFocus={filmInFocus[3]}
            loading={loading}
            stillSrc={SocksStill}
            title="Socks!"
            director="Andrew Howell"
            roles="Head of Sound / Sound Recordist"
            producedBy={MaginationLink}
            description={<>
                A sock puppeteer explores his feelings on relationships with 
                the help of his sentient puppet.
            </>}
            videoLink="https://vimeo.com/315528260"
        />,
    ];


    // 
    // console.log("boutta call useState")
    // for (let index = 0; index < filmCards.length; ++index) {
    //     [filmInFocus[index], setFilmInFocus[index]] = useState(false); // eslint-disable-line react-hooks/rules-of-hooks
    // };

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    // function updateFilmFocus() {
    //     // filmTop represents distance (signed) from top of el to top of window
    //     // filmTop + 600 == 0 ==> 0%
    //     // filmTop == windowHeight ==> 100%
    //     // The 600 should be a 500 on mobile, but it still looks fine with this math
    //     //let filmInFocusTemp = [];
    //     //let focusChanged = false;
    //     console.log("updating film focus, filmCardElements has " + filmCardElements.length + " items")
    //     filmCardElements.forEach((el, index) => {
    //         const filmTop = el.getBoundingClientRect()["top"];
    //         let percentPastFilm = (filmTop + 600) / (windowHeight + 600);
    //         //filmInFocusTemp[index] = (percentPastFilm >= 27 && percentPastFilm <= 73);
    //         //if (filmInFocusTemp[index] !== filmInFocus[index]) focusChanged = true;
    //         let filmInFocusTemp = (percentPastFilm >= 0.27 && percentPastFilm <= 0.73);
    //         if (filmInFocusTemp !== filmInFocus[index]) setFilmInFocus[index](filmInFocusTemp);
    //     });

    //     //if (focusChanged) setFilmInFocus(filmInFocusTemp);
    // }

    // function updateWindowDimensions() {
    //     setWindowHeight(window.innerHeight);
    //     if (filmPageElement != null) updateFilmFocus();
    // }

    // function handleScroll() {
    //     if (filmPageElement != null) updateFilmFocus();
    // }

    // useEffect(function() {
    //     updateWindowDimensions();
    //     handleScroll();
    //     window.addEventListener('resize', updateWindowDimensions);
    //     if (filmPageElement != null) {
    //         filmPageElement.addEventListener('scroll', throttledHandleScroll);
    //     }

    //     return function() {
    //         window.removeEventListener('resize', updateWindowDimensions);
    //         if (filmPageElement != null) {
    //             filmPageElement.removeEventListener('scroll', throttledHandleScroll);
    //         }
    //     }
    // });


    const filmCardWrappers = filmCards.map((card, index) => 
        <div key={index} ref={(el) => filmCardElements[index] = el}>{card}</div>
    );


    return(
        <>
        <Helmet>
            <title>Ben Manley | Films</title>
            <meta name="description" content="I'm a student studying Computer Science, 
                but filmmaking is another passion of mine. Check out the films I've worked on." />
        </Helmet>
        <div id="films-header-bkgd" />
        {/* <div ref={(el) => filmPageElement = el} className="films-page" */}
        <div className="films-page"
                style={loading ? {} : {animationName: "films-page-entrance"}}>
            <div className="header-spacer" />
            <div id="filmspage-title">Here are some of my films.</div>

            {filmCardWrappers}

            <div id="other-works-title">Other Works</div>
            <table id="other-works"><tbody>
                <tr>
                    <th>Every Little Thing</th>
                    <td><strong>Producer</strong>; dir. David Dorsky</td>
                </tr>
                <tr>
                    <th>Brothers</th>
                    <td><strong>Associate Producer, Extra</strong>; dir. Grace Kay</td>
                </tr>
                <tr>
                    <th>Home Grown</th>
                    <td><strong>Head of Sound / Sound Recordist</strong>; dir. Kelsey Fox</td>
                </tr>
                <tr>
                    <th>All Purpose Flour</th>
                    <td><strong>Head of Sound / Sound Recordist</strong>; dir. Maya Konstantino</td>
                </tr>
            </tbody></table>
        </div>
        </>
    );
}

export default FilmsPage;
