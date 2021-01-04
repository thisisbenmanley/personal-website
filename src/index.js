import React from 'react';
import { render } from 'react-snapshot';
import { Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import AboutPage from './scenes/AboutPage/AboutPage';
import TechProjectsPage from './scenes/TechProjectsPage/TechProjectsPage';
import FilmsPage from './scenes/FilmsPage/FilmsPage';
import ResumePage from './scenes/ResumePage/ResumePage';
import FourOhFourPage from './scenes/404Page/404Page'; // can't start with numbers :)

import './index.css';

const trackingId = "UA-166928173-1";
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

// ReactDOM.render(
render(
  <React.StrictMode>
    <Router basename={`${process.env.PUBLIC_URL}/`} history={history}>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"/>
      <div id="index-div">
        <Header />
        <Switch>
          <Route exact path="/" component={AboutPage}/>
          <Route path="/projects" component={TechProjectsPage}/>
          <Route path="/films" component={FilmsPage}/>
          <Route path="/resume" component={ResumePage}/>
          <Route path="*" component={FourOhFourPage}/>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
