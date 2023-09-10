import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
// import { useState } from 'react';

export const HitTheMoleGame = () => {
  return (
    <div className=".hit-the-mole-game">
      <MainHeader value="Kret" />
      <p className="mole-description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
    </div>
  );
};
