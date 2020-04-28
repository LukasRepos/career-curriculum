import React, { Component } from 'react';
import './app.css';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './components/landingPage/landingPage';
import Sololearn from './components/sololearn/sololearn';

export default class extends Component {
     render() {
          return (
               <Router>
                    <Switch>
                         <Route path="/sololearn">
                              <Sololearn />
                         </Route>
                         <Route path="/">
                              <LandingPage />
                         </Route>
                    </Switch>
               </Router>
          );
     }
}

function Pascal() {
     return <h1>Pascal</h1>
}
