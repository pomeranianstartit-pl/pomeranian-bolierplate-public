import './styles.css';
import ProfilePhoto from '../../Images/Piotr_Wojcik_WEEK4_CV.JPG';
import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';

export const MyData = () => {
  return (
    <div className="mydata-dashboard">
      <RoundedImage src={ProfilePhoto} size={{ width: 90, height: 90 }} />
      <div className="mydata-section">
        <h3>Piotr Wójcik</h3>
        <p>Kraków</p>
      </div>
      <div className="mydata-section">
        <p>email:</p>
        <p>email@gmail.com</p>
      </div>
      <div className="mydata-section">
        <p>telefon:</p>
        <p>888-888-888</p>
      </div>
    </div>
  );
};
