import './styles.css';
import React, { useState } from 'react';
export function BooleanExc1() {
  let age = '18';
  let hasDriverLicense = 'true';
  let hasCar = 'true';

  // function canDrive(age, hasDriverLicense, hasCar) {
  //   if (age >= 18) {
  //     if (hasDriverLicense) {
  //       if (hasCar) {
  //         return 'You can drive your car!';
  //       } else {
  //         return 'You can drive a rental car.';
  //       }
  //     } else {
  //       return "You can't drive without a driver's license.";
  //     }
  //   } else {
  //     return 'You are too young to drive.';
  //   }
  // }

  const canDrive = (age, hasDriverLicense, hasCar) => {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    if (hasCar) {
      return 'You can drive your car!';
    }

    if (!hasCar) {
      return 'You can drive a rental car.';
    }
  };
  ///------------------------------------------------------------------------------
  const [number, setNumber] = useState(0);

  const pi = Math.PI;
  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  console.log(number);

  const circleArea = (number, pi) => {
    if (number < 1) {
      return 'Liczba musi być większa od 0';
    }
    if (number > 10) {
      return 'Liczba musi być mniejsza od 11';
    }
    if (number % 2 === 0) {
      return pi * number * number;
    } else {
      return 'Liczba musi być parzysta';
    }
  };

  ///------------------------------------------------------------------------------

  return (
    <div>
      <div>Operatory logiczne</div> <hr />
      <div>{canDrive(age, hasDriverLicense, hasCar)}</div> <hr />
      <div>
        <input type="number" value={number} onChange={handleChange} />
        <p>Pole koła wynosi: {circleArea}</p>
      </div>
    </div>
  );
}
