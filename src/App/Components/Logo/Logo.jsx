import './styles.css';

import logo from '../../Images/start-it-logo.svg';

export const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo} />
    </div>
  );
};
