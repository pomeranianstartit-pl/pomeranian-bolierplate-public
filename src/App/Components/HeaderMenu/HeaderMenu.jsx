import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

import './styles.css';

export function HeaderMenu() {
  return (
    <div className="images-container">
      <SettingIcon />
      {/* todo <RoundImage/> */}
      <div className="circular_image">
        <img src="https://static.wikia.nocookie.net/trainspotting-film/images/d/d7/Sick_boy.jpg" />
      </div>

      <div className="name-surname-container">
        <h4></h4>
        <h5>Test negative</h5>
      </div>

      <MenuArrow className="menu-arrow" />
    </div>
  );
}