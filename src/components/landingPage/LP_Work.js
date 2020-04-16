// import packages
import React from 'react';
import { Component } from 'react';

import portfolio01 from "../../img/portfolio-01.jpg";
import portfolio02 from "../../img/portfolio-02.jpg";

export default class extends Component {
     render() {
          return (
               <React.Fragment>
                    <section className="my-work" id="work">
                         <h2 className="section__title--work">My work</h2>
                         <p className="section__subtitle--work">O meu trabalho desenvolvido</p>

                         <div className="portfolio">

                              <a href="#" className="portfolio__item">
                                   <img src={portfolio01} alt="" className="portfolio__img" />
                              </a>

                              <a href="#" className="portfolio__item">
                                   <img src={portfolio02} alt="" className="portfolio__img" />
                              </a>
                         </div>
                    </section>
               </React.Fragment>
          );
     }
}