import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';
import snowWolf from '../../Images/snow-wolf.png';
import './styles.css';

export const MyData = () => {
  return (
    <div className="dashboard_mydata">
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />
      <div className="mydata_section">
        <h3>Artur Szwemiński</h3>
        <p>Gdańsk</p>
      </div>
      <div className="mydata_section">
        <p>e-mail:</p>
        <p>szweminskiartur@gmail.com</p>
      </div>
      <div className="mydata_section">
        <p>telefon</p>
        <p>+48 511 867 387</p>
      </div>
    </div>
  );
};
