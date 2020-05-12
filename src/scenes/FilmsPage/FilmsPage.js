import React, { useState } from 'react';

import RememberStill from './RememberStill.jpg';
import ViewPointStill from './ViewPointStill.jpg';
import MWBStill from './MWBStill.jpg';
import SocksStill from './SocksStill.jpg';

import Film from './components/Film';
import './FilmsPage.css';
import '../../common.css';

function FilmsPage() {
    let MaginationLink = <a href="https://vimeo.com/maginationfilms" className="link-style" style={{color: "white"}}>M-agination Films</a>
    let MWBAward1 = "Winner, Best Director in a Student Film, Hollywood Florida Film Fest 2016";
    let MWBAward2 = "Winner, Silver Award, FAME'US Int'l Film Fest Summer 2016";

    const [loading, setLoading] = useState(true);

    // Help remove glitchy image load
    function imgLoaded() {
        setLoading(false);
    }

    return(
        <>
        <div id="films-header-bkgd" />
        <div className="films-page" style={loading ? {} : {animationName: "films-page-entrance"}}>
            <div className="header-spacer" />
            <div id="filmspage-title">Here's what I've filmed.</div>

            <Film
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
                // embedSrc="https://drive.google.com/file/d/1Y2WMJIQgwBap51tsMzGWRJB5mkQKF8a2/preview"
                videoLink="https://drive.google.com/file/d/1Y2WMJIQgwBap51tsMzGWRJB5mkQKF8a2/view"
            />

            <Film
                loading={loading}
                stillSrc={MWBStill}
                title="Most Welcome Breezes: The Story of Marion Manley"
                director="Ben and Marissa Manley"
                roles="Director, Cinematographer, Editor, Writer, Narrator"
                awards={<>
                    {MWBAward1}<br/>{MWBAward2}
                </>}
                producedBy="my family"
                description={<>
                    Award-winning documentary short about my great-great-aunt, 
                    Marion Manley, the first female architect in South Florida.
                    Made in high school with my sister.{" "}
                    <a href="https://www.miamiherald.com/living/article57137568.html" className="link-style">In the news.</a>
                </>}
                // embedSrc="https://www.youtube.com/embed/ndou7BDIi1k"
                videoLink="https://www.youtube.com/watch?v=5BSjBLa1ElY"
            />

            <Film
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
                // embedSrc="https://player.vimeo.com/video/268285544"
                videoLink="https://vimeo.com/268285544"
            />

            <Film
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
                // embedSrc="https://player.vimeo.com/video/315528260"
                videoLink="https://vimeo.com/315528260"
            />

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
