import React from 'react';
import './app.css';

import dev01 from "./img/dev-luis-01.jpg";
import dev02 from "./img/dev-luis-02.jpg";
import portfolio01 from "./img/portfolio-01.jpg";
import portfolio02 from "./img/portfolio-02.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div class="logo">
          {/* <img src={logo} alt="" /> */}
        </div>
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
            <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
          </ul>
        </nav>
      </header>

      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Luís Carlos</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={dev01} alt="a picture of Jane Smith smiling" class="intro__img" />
      </section>


      <section class="my-services" id="services">
        <h2 class="section__title section__title--services">What I do</h2>
        <div class="services">
          <div class="service">
            <h3>Design + Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="service">
            <h3>E-Commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="service">
            <h3>WordPress</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <a href="#work" class="btn">My Work</a>
      </section>


      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>

        <div class="about-me__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</p>
        </div>

        <img src={dev02} alt="Jane leaning against a bus" class="about-me__img" />
      </section>

      <section class="my-work" id="work">
        <h2 class="section__title--work">My work</h2>
        <p class="section__subtitle--work">O meu trabalho desenvolvido</p>

        <div class="portfolio">

          <a href="#" class="portfolio__item">
            <img src={portfolio01} alt="" class="portfolio__img" />
          </a>

          <a href="#" class="portfolio__item">
            <img src={portfolio02} alt="" class="portfolio__img" />
          </a>
        </div>
      </section>


      <footer class="footer">

        <a href="mailto:hello@jane.dev" class="footer__link">hello@jane.dev</a>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="https://codepen.io">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="http://dribbble.com">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
      <script src="appIndex.js"></script>
    </div>
  );
}

export default App;
