import './styles.css';

import { useState } from 'react';

import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronIcon } from '../Icons/faq/ChevronIcon';
import { NotificationredIcon } from '../Icons/NotificationredIcon';

export const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  const loginClassName = active ? 'loginPanel' : 'loginPanelHidden';

  return (
    <div className="userpanel">
      <NotificationredIcon />
      <SettingIcon className="setting-icon" />

      <div className="userphoto"></div>
      <div className="userdata">
        <p>Kamila</p>
        <p>Kursantka</p>
      </div>

      <div className="chevronIcon" onClick={handleClick}>
        <ChevronIcon />
      </div>
      <div className={loginClassName}>
        <ChevronIcon />
        <button className="login">Zaloguj się</button>
        <p>
          Nie masz konta?
          <a href="#">Zarejestruj się</a>
        </p>
      </div>
    </div>
  );
};
