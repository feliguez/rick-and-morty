import React from 'react';

import './Header.css';
import logo from '../../../src/logo.png';

const Header = () => {
  return (
    <header id="header">
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="index.html">
              <img src={logo} alt="" title="" />
            </a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="price.html">Pricing</a>
              </li>
              <li className="menu-has-children">
                <a href="index.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog-home.html">Blog Home</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li className="menu-has-children">
                <a href="index.html">Pages</a>
                <ul>
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li className="menu-has-children">
                    <a href="index.html">Level 2 </a>
                    <ul>
                      <li>
                        <a href="index.html">Item One</a>
                      </li>
                      <li>
                        <a href="index.html">Item Two</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
