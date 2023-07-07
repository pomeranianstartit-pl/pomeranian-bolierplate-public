import './styles.css';
import React, { useState } from 'react';

import { SettingIcon } from '../../Components/Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { RightCornerMenuPop } from '../RightCornerMenuPopup/RightCornerMenuPopup';

export const HeaderMenu = () => {
  const [isArrowClicked, setArrowClicked] = useState(false);

  function clickArrowInHeaderMenu() {
    setArrowClicked(!isArrowClicked);
  }
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        <img src="http://placekitten.com/500/500" alt="kitty" />
      </div>
      <div className="person-container">
        <h4>Karol Kuligowski</h4>
        <h5>kursant</h5>
      </div>

      <button onClick={clickArrowInHeaderMenu} className="header-button-arrow">
        <MenuArrow className="menu-arrow" />
      </button>
      {isArrowClicked && <RightCornerMenuPop />}
    </div>
  );
};
