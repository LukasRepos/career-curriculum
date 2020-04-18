// import packages
import React from 'react';
import { Component } from 'react';

import dev02 from "../../img/dev-luis-02.jpg";

export default class extends Component {
     render() {
          return (
               <section className="about-me" id="about">
                    <h2 className="section__title section__title--about">Who I am</h2>
                    <p className="section__subtitle section__subtitle--about">Designer & developer based out of Aveiro</p>

                    <div className="about-me__body">
                         <p>I am a 17 years old boy passioned by computera and programming in general. Always ready to learn something new and to work on new projects.</p>
                         <p></p>
                    </div>

                    <img src={dev02} alt="Jane leaning against a bus" className="about-me__img" />
               </section>
          );
     }
}
