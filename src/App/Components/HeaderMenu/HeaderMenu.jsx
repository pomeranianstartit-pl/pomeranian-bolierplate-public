import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export function HeaderMenu() {
  return (
    <div class="images-container">
      <SettingIcon />
      {/* todo <RoundImage /> */}
      <div class="circular_image">
        <img src="http://placekitten.com/500/500" />
      </div>
      <div className="images-container-name">
        <h4>Karol Prusek</h4>
        <h5>Kursant</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
}
