import { RoundedImage } from '../../Components/RoundedImage';
import snowwolf from '../../Images/snow-wolf.png';

import './styles.css';

export const MyData = () => {
  return (
    <div>
      <RoundedImage src={snowwolf} size={{ width: 90, height: 90 }} />
      <div className="mydata-section">
        <h3>Krzysztof Jesiołowski</h3>
        <p>Reda</p>
      </div>
      <div className="mydata-section">
        <p>e-mail:</p>
        <p>jesiolowskikrzysztof@gmail.com</p>
      </div>
      <div className="mydata-section">
        <p>telefon</p>
        <p>514991165</p>
      </div>
    </div>
  );
};
