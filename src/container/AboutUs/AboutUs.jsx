import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (

  <div className="app__aboutus flex__center section__padding" id="about">

    <div className='app__aboutus-content flex__center'>

    <div className="app__aboutus-content-about-img flex__center">
        <img src={images.recorder} alt="about_recorder" />
    </div>

    <div className='app__aboutus-content-history'>
        <h1 className="headtext__cormorant">About us</h1>
        <img src = {images.ghost} alt = "about_img" className='about_img'/>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          For many of us, pandemic had been have been rough. Many of us were forced to move from big stages to small rooms at homes. 
          It has been a huge emotional loss for all artists and music lovers. EMOGG aims to provide an full interactive online live house 
          for everyone to interact and enjoy music from everwhere in the world, turning every screen to be a music wonderland.
        </p>
        <button type="button" className="custom__button">Reserve Now</button>
      </div>
    </div>
  </div>


);

export default AboutUs;
