import React from 'react';
import './styles.css';
import { IfStatements } from './ifStatements';

export const ExerciseNumberIf = () => {
  let a = 5;
  let b = 2;

  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

  // a = a + 1; //to samo
  // a += 1;//to samo

  //a = a - 3;
  // a -= 3;
  //przykłady innych opercji
  // a *= 4;
  // a /= 4;
  //------------------------------------------------------------

  const result = a > b;
  const result2 = a < b;
  // const result4 = (a) => b;
  const result3 = a <= b;
  // const result5 = a === b; //porównywanie liczb
  console.log('result', result, result2, result3);

  // parse ------------------------------------------------------------
  let c = 'a123b';

  console.log(isNaN(c), 'is NaN');
  const parseINT = parseInt('5');
  const parseINT1 = parseInt('5.5');
  //nie zadziała dla: null undefined
  const parseINT2 = parseInt('a123b');
  console.log(parseINT);
  console.log(parseINT1);
  console.log(parseINT2);

  console.log(Number.isInteger(a), 'is integer');
  // const d = Number(15);
  // d.toExponential...jakas metod - nie wszystkie s pobierane
  // Math.round ------------------------------------------------------------
  console.log(Math.round(6.4), 'Math round');
  console.log(Math.round('a6.4'), 'Math round');

  // Math.ceil ------------------------------------------------------------
  console.log(Math.ceil(0.95));
  // Expected output: 1

  console.log(Math.ceil(4));
  // Expected output: 4

  console.log(Math.ceil(7.004));
  // Expected output: 8

  console.log(Math.ceil(-7.004));
  // Expected output: -7
  // Math.floor ------------------------------------------------------------
  console.log(Math.floor(-7.404));

  // Math.floor ------------------------------------------------------------
  console.log(Math.sqrt(9), 'Pierwiastek kwadratowy z 9');
  console.log(Math.pow(2, 4), 'potęga 2 do 4');
  // Math.random ------------------------------------------------------------
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(30));
  // Expected output: 0, 1 or 2

  console.log(getRandomInt(1));
  // Expected output: 0

  console.log(Math.random());
  // Expected output: a number from 0 to <1

  return (
    <>
      <div>Add{addResult}</div>
      <div>Substract{substResult}</div>
      <div>Multiply{multiplyResult}</div>
      <div>Divide{divideResult}</div>
      <div>Modulo{moduloResult}</div>
      <div>Power{powerResult}</div>
      <IfStatements />
    </>
  );
};
