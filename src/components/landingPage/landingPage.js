// import packages
import React from 'react';
import { Component } from 'react';

// import components
import LPWork from './LP_Work';
import LPAbout from './LP_About';
import LPIntro from './LP_Intro';
import LPFooter from './LP_Footer';
import LPServices from './LP_Services';


export default class extends Component {
     render() {
          return (
               <React.Fragment>
                    <LPIntro />
                    <LPServices />
                    <LPAbout />
                    <LPWork />
                    <LPFooter />
               </React.Fragment>
          );
     }
}