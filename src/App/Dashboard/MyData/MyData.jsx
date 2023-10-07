import { RoundedImage } from '../../Components/RoundedImage/roundedImage';
import snowWolf from '../../Images/snow-wolf.png';
import './styles.css';

export const MyData = () => {
  return (
    <div className="mydata-dashboard">
      <RoundedImage src={snowWolf} size={{ width: 100, height: 100 }} />
      <div>
        <p className="student-name">Arkadio Frel</p>
        <p>Starogard Gdański</p>
      </div>
      <div>
        <p>e-mail</p>
        <p>arkadiuszfrel@gmail.com</p>
      </div>
      <div>
        <p>telefon</p>
        <p>89 888 888 888</p>
      </div>
    </div>
  );
};
