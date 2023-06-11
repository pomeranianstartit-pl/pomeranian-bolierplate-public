import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';
import { Menu } from '../Menu/Menu';

export const Result = ({ score, resultTime }) => {
  return (
    <>
      <h3>
        Gratulacje! Twój wynik to {score} złapane krety w czasie {resultTime}{' '}
        sekund
      </h3>
    </>
  );
};
