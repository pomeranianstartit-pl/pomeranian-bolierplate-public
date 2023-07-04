import './styles.css';
import MyLogo from '../../Images/start-it-logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return <img src={MyLogo} alt="My logo" />;
};
