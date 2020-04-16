import React from 'react';
import { Component } from 'react';

export default class extends Component {
     render() {
          return (
               <footer className="footer">
                    <a href="mailto:luiscarlos.c.afonso@gmail.com" className="footer__link">luiscarlos.c.afonso@gmail.com</a>
                    <ul className="social-list">
                         <li className="social-list__item">
                              <a className="social-list__link" href="https://codepen.io">
                                   <i className="fab fa-codepen"></i>
                              </a>
                         </li>
                         <li className="social-list__item">
                              <a className="social-list__link" href="https://twitter.com">
                                   <i className="fab fa-twitter"></i>
                              </a>
                         </li>
                         <li className="social-list__item">
                              <a className="social-list__link" href="https://github.com">
                                   <i className="fab fa-github"></i>
                              </a>
                         </li>
                    </ul>
               </footer>
          );
     }
}