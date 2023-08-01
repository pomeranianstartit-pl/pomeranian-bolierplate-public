import { useEffect, useState } from 'react';
import './styles.css';
import Button from '../../../Components/Button';
import {MoleIcon} from '../../../Components/Icons/MoleIcon';

export const HitTheMole = () => {
  const arrayWithMole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="htm-wrapper">
      <h4 className="htm-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>
      <div className="htm-menu">
        <p>CZAS GRY</p>
        <Button text="1 minuta" />
        <Button text="2 minuty" />
        <Button text="3 minuty" />
        <p>LICZBA KRETÓW</p>
        <Button text="1 kret" />
        <Button text="2 krety" />
        <Button text="3 krety" />
        <p>PRZYCISKI STERUJĄCE</p>
        <Button text="Start" />
      </div>
      <div className="htm-stage">
        {arrayWithMole.map((element) => {
          return <div className="htm-stage-cell"></div>;
        })}
      </div>

      <div>
        <MoleIcon/>
        </div>
    </div>
  );
};