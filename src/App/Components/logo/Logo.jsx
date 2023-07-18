import { ReactComponent as LogoSVG } from '../../Images/start-it-logo.svg';
import './styles.css';

//deklaracja funkcji anonimowej aka strzałkowej
export const Logo = () => {
  return (
    <div className="logo">
      <LogoSVG />
    </div>
  );
};
