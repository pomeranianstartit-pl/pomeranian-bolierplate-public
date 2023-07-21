import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { RoundImage } from '../../Components/RoundImage/RoundImage';

export const HeaderMenu = () => {
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        <RoundImage size="50px" />
      </div>
      <div className="name-surname-container">
        <h4>Nikolas</h4>
        <h5>Kursant</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
};
