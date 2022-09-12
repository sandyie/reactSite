import React from 'react';

import { images } from '../../constants';



const SubHeading = ( {title} ) => (
  <div style = {{ marginBottom : '0.5rem' }} >
    <img src = {images.ghost} alt = "ghost" className='ghost_img'></img>
    <div style = {{ marginBottom : '0.5rem' }} />
    <p className='p__cormorant'> {title} </p>





  </div>
);

export default SubHeading;
