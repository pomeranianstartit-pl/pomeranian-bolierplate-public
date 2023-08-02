import './styles.css';
import ButtonGra from '../../../Components/ButtonGra';
import { MoleIcon } from '../../../Components/Icons/MoleIcon';

export const HitTheMole = () => {
  const arrayWithMole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="htm-wrapper">
      <h4 className="htm-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>
      <div className="htm-menu">
        <p>czas gry</p>
        <ButtonGra text="1 minuta" />
        <ButtonGra text="2 minuta" />
        <ButtonGra text="3 minuta" />
        <p>liczba kretów</p>
        <ButtonGra text="1 kret" />
        <ButtonGra text="2 kret" />
        <ButtonGra text="3 kret" />
        <p>Przycisk sterujący</p>
        <ButtonGra text="Start" />
      </div>
      <div className="htm-stage">
        {arrayWithMole.map((element, index) => {
          return <div key={index} className="htm-stage-cell"></div>;
        })}
      </div>
      <div>
        {' '}
        <MoleIcon />{' '}
      </div>
    </div>
  );
};
