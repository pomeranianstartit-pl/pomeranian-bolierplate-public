import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';
import snowWolf from '../../Images/snow-wolf.png';

export const MyData = () => {
  return (
    <div className="mydata-dashboard">
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />
      <div className="mydata-section">
        <h3> Karol Wojnowski</h3>
        <p>Toruń</p>
      </div>
      <div className="mydata-section">
        e-mail:
        <p>jakis@mail.com</p>
      </div>
      <div className="mydata-section">
        telefon:
        <p>777 777 777</p>
      </div>
    </div>
  );
};
