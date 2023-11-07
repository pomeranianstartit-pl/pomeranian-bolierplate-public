import './styles.css';
import { SettingIcon } from '../../../Components/Icons/SettingIcon';
import { ReactComponent as Ellipse } from '../../../Images/Ellipse 2.svg';
import { ReactComponent as RightArrow } from '../../../Images/right-arrow 1.svg';
import { ReactComponent as Notification } from './../../../Images/notification-1.svg';
import { useState } from 'react';
import LoginPanel from '../LoginPanel';

export const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header--menu">
      <Notification />
      <SettingIcon />
      <Ellipse />
      <div className="header-menu-user">
        {' '}
        <p>Anna</p>
        <p>kursant</p>
      </div>
      <RightArrow onClick={handleArrowClick} />
      {isMenuOpen && <LoginPanel onClick={handleArrowClick} />}
    </div>
  );
};
