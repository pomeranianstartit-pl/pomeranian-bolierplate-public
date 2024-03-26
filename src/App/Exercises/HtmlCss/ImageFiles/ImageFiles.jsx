import './styles.css';

/*import first from './asus.jpg';
import second from './asus.png';
import third from './asus.svg';*/
import logoPomeranian from './pomeranian-icon.png';
import zdjęcie from './zdjęcie.jpeg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const ImageFiles = () => {
  return (
    <div>
      {/* <img src={first} alt="logo asus" />
      <img src={second} alt="logo asus" />
      <img src={third} alt="logo asus" /> */}

      <img src={logoPomeranian} alt="Pomeranian logo" />
      <img src={zdjęcie} alt="Zdjęcie" />
      <RoundImage src={zdjęcie} size={`300`} />
      <RoundImage src={logoPomeranian} size={`400`} />
    </div>
  );
};
