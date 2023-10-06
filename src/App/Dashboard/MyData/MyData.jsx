import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';
import snowWolf from '../../Images/snow-wolf.png';

import './styles.css';

export const MyData = () => {
  return (
    <div>
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />

      <div className="dashboard-mydata">
        <div className="mydata-section">
          <h3>Anna Wiszniewska</h3>
          <p>Gdańsk</p>
        </div>
        <div className="mydata-section">
          <p>e-mail:</p>
          <p>anna@wisz.pl</p>
        </div>
        <div className="mydata-section">
          <p>telefon:</p>
          <p>555 555 555</p>
        </div>
      </div>
    </div>
  );
};
