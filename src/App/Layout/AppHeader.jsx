import { SettingIcon } from '../Components/Icons/SettingIcon';
import { RightArrow } from '../Components/Icons/RightArrow';
import myphoto from '../Images/myphoto.jpg';
import { useState } from 'react';
import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
//import { HeaderMenu } from '../Components/HeaderMenu';
import { Login } from './Login';

export function AppHeader() {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <header>
      <PomeranianLogo />
      <div className="container">
        <SettingIcon />
        <img src={myphoto} />

        <div className="user">
          <p>Katarzyna </p>
          <p>kursant </p>
        </div>
        <button className='buttonarrow' onClick={handleButton}>
          <RightArrow />
        </button>
        {display && <Login />}
      </div>
    </header>
  );
}
