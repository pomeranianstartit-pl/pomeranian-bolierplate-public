import React from 'react';

import HeaderIcons from '../HeaderIcons';
import HeaderRight from '../HeaderRight';

import './styles.css';

const HeaderMenu = ({ icons = [], name, position }) => {
  return (
    <div className="header-menu">
      <HeaderIcons icons={icons} />
      <HeaderRight name={name} position={position} />
    </div>
  );
};

export default HeaderMenu;