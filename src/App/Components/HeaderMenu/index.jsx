import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon.jsx';

export function HeaderMenu() {
  return (
    <div className="header-menu">
      <SettingIcon />
      <div className="bheader-menu-placeholder"></div>
      <div className="header-menu-user">
        <p>Władysław</p>
        <p>kursant</p>
      </div>
      <ArrowDownIcon />
    </div>
  );
}
