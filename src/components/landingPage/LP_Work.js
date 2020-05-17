// import packages
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'

import portfolio01 from "../../img/portfolio-01.jpg";
import portfolio02 from "../../img/portfolio-02.jpg";
import portfolio03 from "../../img/portfolio-03.jpg";

export default class extends Component {
     render() {
          return (
               <React.Fragment>
                    <section className="my-work" id="work">
                         <h2 className="section__title--work">My work</h2>
                         <p className="section__subtitle--work">O meu trabalho desenvolvido</p>

                         <div className="portfolio">

                              <Link to="/sololearn" className="portfolio__item">
                                   <img src={portfolio01} alt="" className="portfolio__img" />
                              </Link>

                              <Link to="/pascal" className="portfolio__item">
                                   <img src={portfolio02} alt="" className="portfolio__img" />
                              </Link>

                              <Link to="/project-chatty" className="portfolio__item">
                                   <img src={portfolio03} alt="" className="portfolio__img" />
                              </Link>
                         </div>
                    </section>
               </React.Fragment>
          );
     }
}