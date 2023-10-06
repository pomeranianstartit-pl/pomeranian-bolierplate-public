import { RoundedImage } from '../../Components/RoundedImage/RoundedImage';
import snowWolf from '../../Images/snow-wolf.png';

import './styles.css';

export const MyData = () => {
  return (
    <div className="generalMyData">
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />
      <div className="myDataGeneral">
        <h3>Bartosz</h3>
        <div>Wroclaw</div>
      </div>
      <div className="myDataMail">
        <div>e-mail:</div>
        <div>mail@mail.pl</div>
      </div>
      <div className="myDataPhone">
        <div>telefon:</div>
        <div>888 999 888:</div>
      </div>
    </div>
  );
};
