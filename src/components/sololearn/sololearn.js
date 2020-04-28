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
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn02} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn03} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn04} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn05} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn06} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn07} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn08} />
                              <p>First</p>
                         </div>
                         <div className="sololearn__item">
                              <img src={Sololearn09} />
                              <p>First</p>
                         </div>
                    </div>
               </React.Fragment>
          );
     }
}