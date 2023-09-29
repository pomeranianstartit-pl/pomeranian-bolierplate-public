import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';
import { ArrowDownIcon } from '../Icons/ArrowDown';

export function HeaderMenu() {
  return (
    <div className="header-menu">
      <SettingIcon />
      <div className="header-menu-placeholder"></div>
      <div className="header-menu-user">
        <p>Szczepan</p>
        <p>kursant</p>
      </div>
      <ArrowDownIcon />
    </div>
  );
}
