import React from 'react';
import './styles.css';

let age = 19;
let hasDriverLicense = true;
let hasCar = true;

let canDrive =
  age >= 18
    ? hasDriverLicense
      ? hasCar
        ? console.log('You can drive your car!')
        : console.log('You can drive a rental car.')
      : console.log("You can't drive without a driver's license.")
    : console.log('You are too young to drive.');

// canDrive(18, true, true);

// const hasEnough = hasEnough ? true : false;
// hasEnough(true);
export const JsNumbersTraining = () => {
  return (
    <div>
      <button onClick={canDrive}>Ćwiczenie 1</button>
    </div>
  );
};
