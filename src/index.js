import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import HomePage from './scenes/HomePage/HomePage';
import AboutPage from './scenes/AboutPage/AboutPage';
import TechProjectsPage from './scenes/TechProjectsPage/TechProjectsPage';
import FilmsPage from './scenes/FilmsPage/FilmsPage';
import ResumePage from './scenes/ResumePage/ResumePage';
import NoPage from './scenes/NoPage/NoPage';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"/>
      <div id="index-div">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects" component={TechProjectsPage}/>
          <Route path="/films" component={FilmsPage}/>
          <Route path="/resume" component={ResumePage}/>
          <Route path="*" component={NoPage}/>
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
