import React, {useState} from 'react';
import {TbGhost} from 'react-icons/tb';
import {TbPlaylist} from 'react-icons/tb';

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav class = "app__navbar">
        <div className = "app__navbar-logo">
          <img src = {images.emoggLogo} alt = "app logo" />
        </div>

        <ul className = "app__navbar-links">
          <li className = "p__righteous"> <a href = "#home"> Home </a></li>
          <li className = "p__righteous"> <a href = "#about"> About </a></li>
          <li className = "p__righteous"> <a href = "#service"> Service </a></li>
          <li className = "p__righteous"> <a href = "#show"> Shows </a></li>
          <li className = "p__righteous"> <a href = "#gallery"> Gallery </a></li>
          <li className = "p__righteous"> <a href = "#song"> Songs</a></li>
        </ul>

        <div className='app__navbar-login'>
          <a href = "#about" className='p__righteous'> Reserve </a>
          <div />
          <a href = "#/" className='p__righteous'> Sign up </a>
        </div>

        <div className='app__navbar-smallscreen'>
          <TbGhost color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

          {toggleMenu &&  (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <TbPlaylist fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

            <ul className = "app__navbar-smallscreen_links">
              <li className = "p__opensans"> <a href = "#home"> Home </a></li>
              <li className = "p__opensans"> <a href = "#about"> About </a></li>
              <li className = "p__opensans"> <a href = "#service"> Service </a></li>
              <li className = "p__opensans"> <a href = "#show"> Shows </a></li>
              <li className = "p__opensans"> <a href = "#song"> Songs</a></li>
            </ul>
            
          </div>
          )}

        </div>
    </nav>
  );
}
  

export default Navbar;
