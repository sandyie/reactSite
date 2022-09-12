import React from 'react';

import { AboutUs, Service, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Service />
    <Intro />
    <SpecialMenu />
    {/* <Laurels /> */}
    <Gallery />
    {/* <FindUs /> */}
    <Footer /> 
  </div>
);

export default App;
