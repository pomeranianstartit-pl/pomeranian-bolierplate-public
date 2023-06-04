import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';
import { Menu } from '../Menu/Menu';

export const Result = ({ score, time, setOptionChosen, initialTime }) => {
  return (
    <>
      <h3>
        Gratulacje! Twój wynik to {score} złapane krety w czasie {initialTime}
      </h3>
    </>
  );
};
