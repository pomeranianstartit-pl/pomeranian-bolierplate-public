import { useState } from 'react';

import './styles.css';

import toggleArrow from '../../Images/toggle-arrow.svg';

import LoginPanel from '../LoginPanel';

const HeaderRight = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="avatar-wrapper">
      <img
        className="avatar-img"
        width={49}
        height={49}
        src={
          'https://media.licdn.com/dms/image/D4E03AQG0TXMc6MKSTQ/profile-displayphoto-shrink_800_800/0/1694862430503?e=1701907200&v=beta&t=7MnMMFNYH7OHOff53lVR5eR8tVOBkq16KRVdRIt83Pc'
        }
        alt="profile"
      />
      <div className="avatar-content">
        <div className="content-name">Natalia</div>
        <div className="content-position">IT helpdesk </div>
      </div>

      <img
        onClick={handleArrowClick}
        className="more"
        src={toggleArrow}
        alt="more"
      />

      {isMenuOpen && <LoginPanel onClick={handleArrowClick} />}
    </div>
  );
};

export default HeaderRight;
