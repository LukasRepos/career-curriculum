// import packages
import React from 'react';
import { Component } from 'react';

export default class extends Component {
     render() {
          return (
               <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">What I do</h2>
                    <div className="services">
                         <div className="service">
                              <h3>Design + Development</h3>
                              <p>I made some designing wok mainly of this website and some backend server with node.js, mongodb and GraphQL.</p>
                         </div>

                         <div className="service">
                              <h3>Unity</h3>
                              <p>I have a few applications almost ready to be published in the playstore made with Unity2D.</p>
                         </div>

                         <div className="service">
                              <h3>Desktop Development</h3>
                              <p>I made some aplications, being the biggest a complete console engine and a TicTacToe game using Pascal and AI so we can play against bots of different difficulty levels.</p>
                         </div>
                    </div>

                    <a href="#work" className="btn">My Work</a>
               </section>
          );
     }
}
