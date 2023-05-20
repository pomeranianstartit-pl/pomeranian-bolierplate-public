import './styles.css';

import { SettingIcon } from '../../Components/Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export const HeaderMenu = () => {
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        <img src="http://placekitten.com/500/500" alt="kitty" />
      </div>
      <div className='person-container'>
        <h4>Weronika Radtke</h4>
        <h5>kursant</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
};