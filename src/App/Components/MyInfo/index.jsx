import { RoundImage } from '../RoundImage';
import './styles.css';

export const MyInfo = () => {
  return (
    <div className="my-info">
      <div className="ramka">
        <RoundImage
          url="https://media.licdn.com/dms/image/C4D03AQFNuBGti63RUA/profile-displayphoto-shrink_800_800/0/1639596139513?e=1698883200&v=beta&t=xh2fQ6EOvxLKN2b4jaiGcGfGL7PJ9BcYft1_t30e4YI"
          size="120px"
        />
        <div className="imienazwisko">Aleksandra Waniczek</div>
        <div className="miasto">Kraków</div>
        <div className="mail">
          <br></br>e-mail:
        </div>
        <div className="mail2">owaniczek.it@gmail.com</div>
        <div className="tel">
          <br></br>mobile:
        </div>
        <div className="tel2">+48 606 606 606</div>
      </div>
    </div>
  );
};
