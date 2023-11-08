import './styles.css';
import { useState } from 'react';

import { SettingIcon } from '../Icons/SettingIcon';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon.jsx';
import { NotificationIcon } from '../Icons/NotificationIcon.jsx';

export const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  const loginClassName = active ? 'loginPanel' : 'loginPanelHidden';

  return (
    <div className="header-menu">
      <NotificationIcon />
      <SettingIcon />
      <div className="bheader-menu-placeholder"></div>
      <div className="header-menu-user">
        <p>Władysław</p>
        <p>kursant</p>
      </div>
      <ArrowDownIcon />
      <button className="login">Zaloguj się</button>
      <p>
        Nie masz konta?
        <a href="#">Zarejestruj się</a>
      </p>
    </div>
  );
};
