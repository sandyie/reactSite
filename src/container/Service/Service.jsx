import React from 'react';
import { images } from '../../constants';

import './Service.css';

const Service = () => (
  <div className="app__service party__bg flex__center section__padding" id="service">
  <div className="app__service-content flex__center">
    <div className="app__service-content_artist">
      <h1 className="headtext__cormorant">For Artists</h1>

      <p className="p__opensans"> Never miss any other chance to share you music and passion! Request a stage now! </p>
      <button type="button" className="custom__button">Request stages</button>
    </div>

    <div className="app__service-content_img flex__center">
      <img src={images.onlineConcert} alt="about_concert" />
    </div>

    <div className="app__service-content_lover">
      <h1 className="headtext__cormorant">For Music Lovers</h1>
      <p className="p__opensans_service">Enjoy the exclusive interactive online performace brought to you by 
      great artists of different genres!  Try different comments to interact! </p>
      <button type="button" className="custom__button">Request artists</button>
    </div>

    
  </div>
</div>
);

export default Service;
