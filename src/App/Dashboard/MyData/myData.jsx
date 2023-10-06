import { RoundedImage } from '../../Components/RoundedImage/Index';
import './styles.css';
import snowWolf from '../../Images/snow-wolf.png';

export const MyData = () => {
  return (
    <div className="dashboardMyData">
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />
      <h3 className="myDataSection">Przemysław Kocjan</h3>
      <div>Gliwice</div>
      <div className="myDataSection">
        e-mail:
        <p>przemo505@hotmail.com</p>
      </div>
      <div className="myDataSection">
        telefon:
        <p>888-888-888</p>
      </div>
    </div>
  );
};
