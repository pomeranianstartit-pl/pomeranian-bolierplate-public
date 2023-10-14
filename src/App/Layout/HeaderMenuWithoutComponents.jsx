import { useState } from 'react';

import toggleArrow from '../Images/toggle-arrow.svg';

const HeaderMenuWithoutComponents = ({ name, position, icons }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header-menu">
      <div className="header-icons">
        {icons.map((icon) => (
          <img src={icon.icon} alt={icon.key} />
        ))}
      </div>
      <div className="avatar-wrapper">
        <img
          className="avatar-img"
          width={49}
          height={49}
          src={
            'https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI='
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

        {isMenuOpen && (
          <div onClick={handleArrowClick} className="header-panel">
            <img
              onClick={handleArrowClick}
              className="more"
              src={toggleArrow}
              alt="more"
            />
            <div className="panel-content">
              <button className="login-button">Zaloguj się</button>
              <div>
                Nie masz konta
                <button className="register-button">Zarejestruj się</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenuWithoutComponents;