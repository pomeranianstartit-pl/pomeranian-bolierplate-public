import React from 'react';

import './styles/header.css';

//utwurz mi komponent react o nazie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
// import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      {/* // component react  */}
      <PomeranianLogo />
      {/* <HeaderMenu /> */}
    </header>
  );
}
