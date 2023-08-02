import './styles.css';
import ButtonGra from '../../../Components/ButtonGra';
import { MoleIcon } from '../../../Components/Icons/MoleIcon';
import { Menu } from './Menu';
import { SelectButtons } from './SelectButtons';
import { Button } from './Button';

export const HitTheMole = () => {
  const arrayWithMole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="htm-wrapper">
      <h4 className="htm-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>
      <div className="htm-menu">
        <Menu label="Czas gry">
          <SelectButtons
            options={[
              { value: 1, label: '1 miniuta', isActive: true },
              { value: 2, label: '2 miniuta', isActive: false },
              { value: 3, label: '3 miniuta', isActive: false },
            ]}
          />
        </Menu>

        <Menu label="liczba kretów">
          <SelectButtons
            options={[
              { value: 1, label: '1 kret', isActive: true },
              { value: 2, label: '2 krety', isActive: false },
              { value: 3, label: '3 krety', isActive: false },
            ]}
          />
        </Menu>
        <Menu label="przycisk starujący">
          <ButtonGra text="Start" />
        </Menu>
      </div>
      <div className="htm-stage">
        {arrayWithMole.map((element) => {
          return (
            <div className="htm-stage-cell">
              <MoleIcon />
            </div>
          );
        })}
      </div>
    </div>
  );
};
