import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';
import myphoto from '../MyData/foto.jpg';

import './styles.css';

export const MyData = () => {
  return (
    <div className="mydata-dashboard">
      <RoundedImage src={myphoto} size={{ width: 90, height: 90 }} />
      <div className="mydata-section">
        <h3>Patrycja Ojewska</h3>
        <p>Gdańsk</p>
      </div>
      <div className="mydata-section">
        email:
        <p>dziubek@gmail.com</p>
      </div>
      <div className="mydata-section">
        telefon:
        <p>888 888 888</p>
      </div>
    </div>
  );
};
