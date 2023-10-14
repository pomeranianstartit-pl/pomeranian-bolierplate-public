import React from 'react';

import './styles/header.css';


//utworz mi komponent react o nazie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
import  HeaderMenu  from './components/HeaderMenu';
import HeaderMenuWithoutComponents from './HeaderMenuWithoutComponents';

import setting from '../Images/setting.svg';

import './styles/header.css';

const icons = [
  {
    key: 'Notification',
    icon: setting,
  },
  {
    key: 'Settings',
    icon: setting,
  },
];

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      
      {/* // component react  */}
      <PomeranianLogo />
      <HeaderMenu name="Arleta" position="kursantka" icons={icons} />
       
    </header>
  );
}