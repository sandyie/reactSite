import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__bg app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>

      <SubHeading title = "Good Game To My EMO Time"/>
      
      <h1 className='app__header-h1'> Ultimate fun here in your fingertip</h1>
      <p className='p__opensans' style = {{ marginBottom : '2rem 0' }}></p> 
      <p className="p__opensans_service" style={{ margin: '2rem 0' }}>Reserve now to join for free!</p>
      <button type="button" className="custom__button">Explore More</button>

    </div>

    <div className='app__wrapper_img'>
      <img src = {images.welcome} alt="header_img" />
    </div>
  </div>


);

export default Header;
