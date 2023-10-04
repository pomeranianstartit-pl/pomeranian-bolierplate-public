import React from 'react';

import './styles/header.css';

//utwórz mi komponent react o nazwie Logo ze sciezki do pliku ktora podalem

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';

//utwórz mi komponent react o nazwie HeaderMenu ze sciezki do pliku ktora podalem

import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      {/* // component react  */}
      <PomeranianLogo />
      <HeaderMenu />
    </header>
  );
}
