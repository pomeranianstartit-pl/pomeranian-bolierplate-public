import './styles.css';

import first from './asus.jpg';
import second from './asus.png';
import third from './asus.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} />;
      <img src={second} />;
      <img src={third} />;
    </div>
  );
};
