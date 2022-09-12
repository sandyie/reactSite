import React from 'react';

import './Footer.css';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => (
  <div className="app__footer app__bg section__padding" id="login">
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_logo">
        <img src={images.emoggLogo} alt="emogg_logo" />
        <p className="p__opensans">&quot; The better way to enjoy music, live, and life. &quot;</p>


      </div>

    </div>

  </div>

);

export default Footer;
