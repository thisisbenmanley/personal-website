
# Ben Manley's Personal Website

## Built with React, styled by hand!

Live at [benmanley.dev](https://benmanley.dev).

Setup done with [Create React App](https://github.com/facebook/create-react-app) and routing with [React Router](https://reacttraining.com/react-router/).

Almost all styling and animation was done in raw HTML/CSS (with some JS work to style the Film cards while scrolling through), including considering varying screen sizes.

I templated and modularized as much as I could (e.g. the cards on the [Tech Projects](https://benmanley.dev/projects) page are instances of [ProjectCard](./src/scenes/TechProjectsPage/components/ProjectCard.js), the various individual project pages are instances of [ProjectTemplate](./src/scenes/TechProjectsPage/components/ProjectTemplate.js), etc.) to make my life easier when I complete additional tech projects and films.

## Special Thanks

to the Coronavirus pandemic for providing the time to complete this.

(Oh, also [Eashwar Mohan](https://eash.dev), [Montana Mott](https://montanamott.dev), and [Michelle Gehner](https://michellegehner.com) for helping with design and testing.)