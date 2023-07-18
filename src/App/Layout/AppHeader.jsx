import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ArrowDown } from '../Components/Icons/ArrowDown';

export function AppHeader() {
  return (
    <header>
      <>
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          {/* <SettingIcon/> */}
          <SettingIcon />
          <div className="mid_component">
            <div className="circle"></div>
            <div className="name_rank">
              <p className="name">Krzysztof</p>
              <p className="rank_1">kursant</p>
            </div>
          </div>
          <ArrowDown />
        </div>
      </>
    </header>
  );
}
