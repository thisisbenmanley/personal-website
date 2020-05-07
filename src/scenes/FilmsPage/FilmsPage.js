import React from 'react';

import RememberPoster from './RememberPoster.jpg';
import RememberStill from './RememberStill.jpg';
import ViewPointPoster from './ViewPointPoster.jpg';
import ViewPointStill from './ViewPointStill.jpg';
import MWBPoster from './MWBPoster.jpg';
import MWBStill from './MWBStill.jpg';
import SocksPoster from './SocksPoster.jpg';
import SocksStill from './SocksStill.jpg';

import Film from './components/Film';
import './FilmsPage.css';
import '../../common.css';

function FilmsPage() {
    let MaginationLink = <a href="https://vimeo.com/maginationfilms" className="link-style">M-agination Films</a>

    return(
        <>
        <div id="films-header-bkgd" />
        <div className="films-page">
            <div className="header-spacer" />
            <div id="filmspage-title">Filmography</div>

            <Film
                stillSrc={RememberStill} posterSrc={RememberPoster}
                title="Remember."
                director="Jake Feeman"
                roles="Associate Producer, Editor"
                producedBy={MaginationLink}
                description={<>
                    A high school girl returns to the site of a school shooting to 
                    reclaim the legacy of her murdered best friend.
                </>}
                embedSrc="https://drive.google.com/file/d/1Y2WMJIQgwBap51tsMzGWRJB5mkQKF8a2/preview"
            />

            <Film
                stillSrc={MWBStill} posterSrc={MWBPoster}
                title="Most Welcome Breezes: The Story of Marion Manley"
                director="Ben and Marissa Manley"
                roles="Director, Cinematographer, Editor, Writer, Narrator"
                producedBy="My Family"
                description={<>
                    Award-winning documentary short about my great-great-aunt, 
                    Marion Manley, the first female architect in South Florida.
                    Made in high school with my sister.{" "}
                    <a href="https://www.miamiherald.com/living/article57137568.html" className="link-style">In the news</a>
                </>}
                embedSrc="https://www.youtube.com/embed/ndou7BDIi1k"
            />

            <Film
                stillSrc={ViewPointStill} posterSrc={ViewPointPoster}
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
                embedSrc="https://player.vimeo.com/video/268285544"
            />

            <Film
                stillSrc={SocksStill} posterSrc={SocksPoster}
                title="Socks!"
                director="Andrew Howell"
                roles="Head of Sound / Sound Recordist"
                producedBy={MaginationLink}
                description={<>
                    A sock puppeteer explores his feelings on relationships with 
                    the help of his sentient puppet.
                </>}
                embedSrc="https://player.vimeo.com/video/315528260"
            />
        </div>
        </>
    );
}

export default FilmsPage;

// Remember
{/* <img src={RememberPoster} height={300} /> */}
{/* <iframe src="https://drive.google.com/file/d/1Y2WMJIQgwBap51tsMzGWRJB5mkQKF8a2/preview" width="640" height="480"></iframe> */}

// View.Point
{/* <iframe src="https://player.vimeo.com/video/268285544" width="640" height="272" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/268285544">View.Point</a> from <a href="https://vimeo.com/maginationfilms">M-agination Films</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}

// Socks
{/* <iframe src="https://player.vimeo.com/video/315528260" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/315528260">Socks!</a> from <a href="https://vimeo.com/andrewhowell">Andrew Howell</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}

// Most Welcome Breezes: The Story of Marion Manley
{/* <iframe src="https://www.youtube.com/embed/ndou7BDIi1k" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
// https://www.miamiherald.com/living/article57137568.html
