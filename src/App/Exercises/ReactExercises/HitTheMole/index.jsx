import './styles.css';
import { MoleButton } from '../../../Components/MoleButton';
import MoleImage from '../../../Images/moleImage.svg';

export const HitTheMole = () => {
  let arrayMole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="mole-box">
      <h4 className="mole-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>
      <div className="mole-panel-div">
        <p>CZAS GRY</p>
        <MoleButton buttonText="1 minuta" />
        <MoleButton buttonText="2 minuta" />
        <MoleButton buttonText="3 minuta" />
        <p>LICZBA KRETÓW</p>
        <MoleButton buttonText="1 kret" />
        <MoleButton buttonText="2 krety" />
        <MoleButton buttonText="3 krety" />
        <p>PRZYCISKI STERUJĄCE</p>
        <MoleButton buttonText="Start/Stop" />
      </div>
      <div className="mole-stage">
        {arrayMole.map((e) => {
          return <div className="mole-stage-cell"></div>;
        })}
      </div>
      <img src={MoleImage} className="mole-image" />
    </div>
  );
};
