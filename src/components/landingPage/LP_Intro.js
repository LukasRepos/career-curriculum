// import packages
import React from 'react';
import { Component } from 'react';

import dev01 from "../..//img/dev-luis-01.jpg";

export default class extends Component {
     render() {
          return (
               <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                         Hi, I am <strong>Luís Carlos</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">Web & Desktop development</p>
                    <img src={dev01} alt="a picture of Luís Carlos smiling" className="intro__img" />
               </section>
          );
     }
}