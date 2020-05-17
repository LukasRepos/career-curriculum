import React, { Component } from 'react';

import Intro from './SL_Intro';

import Sololearn01 from '../../img/sololearn01.jpg';
import Sololearn02 from '../../img/sololearn02.jpg';
import Sololearn03 from '../../img/sololearn03.jpg';
import Sololearn04 from '../../img/sololearn04.jpg';
import Sololearn05 from '../../img/sololearn05.jpg';
import Sololearn06 from '../../img/sololearn06.jpg';
import Sololearn07 from '../../img/sololearn07.jpg';
import Sololearn08 from '../../img/sololearn08.jpg';
import Sololearn09 from '../../img/sololearn09.jpg';

export default class extends Component {
     render() {
          return (
               <React.Fragment>
                    <Intro />
                    <div className="sololearn">
                         <div className="sololearn__item">
                              <img src={Sololearn01} />
                              <p>A c++ course that covers everything, from the really basics of the language to the very new stuff from inheritance to pointers. A really nice course that helped me a lot understanding the basics of OOP.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn02} />
                              <p>A complete awesome styling course that teaches us everything that we need to know to build awesome looking websites from ground up.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn03} />
                              <p>An HTML course that comes with the goal of building a blog using nothing more than CSS, HTML and JavaScript.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn04} />
                              <p>One of the most important languages at this moment, from web apps to AI learning, JavaScript is becoming the way to go. This course help us understanding and manage the great power of JavaScript.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn05} />
                              <p>A really easy to follow course with a bunch of content that varies from the very basic to the advanced topics.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn06} />
                              <p>Another course related to the WEB, now its JQuery, a must have for creating bare-bones websites, JQuery is a lightweight JavaScript library that enhances the power of JavaScript.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn07} />
                              <p>This course is related to backend servers and their management. PHP is a great language, easy to use and really powerfull when we want to create dynamic websites.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn08} />
                              <p>Python is a language that is becoming really popular in fields like Computer Science and Mathematics, not by the speed but because the fast and easy prototyping that Python enables us to do.</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn09} />
                              <p>This is a language to be used with sequel databases like MySQL. This course teaches the way to go when it comes to retrieving and fetching data to a database.</p>
                         </div>
                    </div>
               </React.Fragment>
          );
     }
}