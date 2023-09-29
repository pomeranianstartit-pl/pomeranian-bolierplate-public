import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronIcon } from '../Icons/faq/ChevronIcon';

export const HeaderMenu = () => {
  return (
    <div className="profilepanel">
      <SettingIcon />
      <div className="profilepic"></div>
      <div className="profiledata">
        <p>Wojciech</p>
        <p>Kursant</p>
      </div>
      <ChevronIcon />
    </div>
  );
};
