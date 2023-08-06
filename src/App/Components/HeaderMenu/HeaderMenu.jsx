import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

import './styles.css';

export function HeaderMenu() {
  return (
    <div className="images-container">
      <SettingIcon />
      {/* todo <RoundImage/> */}
      <div className="circular_image">
        <img src="http;//placekitten.com/500/500" />
      </div>

      <div className="name-surname-container">
        <h4>Małgorzata Greszczuk</h4>
        <h5>Test</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
}
