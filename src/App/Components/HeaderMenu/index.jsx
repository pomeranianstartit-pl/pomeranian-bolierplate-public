import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { ReactComponent as Ellipse } from '../../Images/Ellipse 2.svg';
import { ReactComponent as RightArrow } from '../../Images/right-arrow 1.svg';

export const HeaderMenu = () => {
  return (
    <div className="header--menu">
      <SettingIcon />
      <Ellipse />
      <div className="header-menu-user">
        {' '}
        <p>Anna</p>
        <p>kursant</p>
      </div>
      <RightArrow />
    </div>
  );
};
