import './styles.css';

import first from './asus.jpg';
import second from './asus.png';
import third from './asus.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="logo asus" />
      <img src={second} alt="logo asus" />
      <img src={third} alt="logo asus" />
    </div>
  );
};
