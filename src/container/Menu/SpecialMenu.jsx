import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg flex__center section__padding" id="show">
    <div className="app__specialMenu-title">
      <SubHeading title="Fill up your music hunger" />
      <h1 className="headtext__cormorant__shows">Previous Shows</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">LiveShow Vol. 1</p>
        <div className="app__specialMenu_menu_items">
          {data.vol1.map((vol1, index) => (
            <MenuItem key={vol1.title + index} title={vol1.title} tags={vol1.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.light} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">LiveShow Vol. 2</p>
        <div className="app__specialMenu_menu_items">
          {data.vol2.map((vol2, index) => (
            <MenuItem key={vol2.title + index} title={vol2.title} tags={vol2.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
    </div>
  </div>
);

export default SpecialMenu;
