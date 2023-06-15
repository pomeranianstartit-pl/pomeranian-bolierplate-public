import './styles.css';
import MyLogo from '../../Images/start-it-logo.svg';

export const Logo = () => {
  return (
    <div>
      <img src={MyLogo} alt="start-it-logo" />
    </div>
  );
};
