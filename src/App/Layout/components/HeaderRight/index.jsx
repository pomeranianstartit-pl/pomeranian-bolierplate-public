import { useState } from 'react';

import LoginPanel from '../LoginPanel';

import toggleArrow from '../../../Images/toggle-arrow.svg';

import './styles.css';

const HeaderRight = ({ name, position }) => {
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCMbpDyhqHLs1FV3bVpz9zKNYQRPKznAb8bysKgI4_KU12bOjikkN0V5gOpr6uIhHXLA&usqp=CAU'
        }
        alt="profile"
      />
      <div className="avatar-content">
        <div className="content-name">{name}</div>
        <div className="content-position">{position}</div>
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