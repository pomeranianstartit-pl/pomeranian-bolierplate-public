// import './styles.css';
import { IfStatements } from "./IfStatements";


export function Exercise() {
  let a = 5;
  let b = 2;

  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

//   a = a + 1
  a += 1
//   a = a - 3
  a -= 1
//   Przykłady innych operacji
//   a *= 1
//   a /= 1
// ---------------------------------------------------

const result1 = a > b;
const result2 = a < b;
const result3 = a >= b;
const result4 = a <= b;
const result5 = a === b;



console.log('result', result2, result3);

// IF -----------------------------------------------------

let c = 'a123b';

console.log(isNaN(c), 'isNan?')

const parseINT = parseInt('5')
const parseINT_1 = parseInt(5.5)
// nie zadziała dla : null, underfined...
const parseINT_2 = parseInt('a123b')

console.log(parseINT, 'parseINT')
console.log(parseINT_1, 'parseINT_1')
console.log(parseINT_2, 'parseINT_2')

console.log(Number.isInteger(a), 'isInteger()')
// const d = Number(15);
// d.... jakaś metoda

// zaokrąglanie
console.log(Math.round(5,4), 'Math.round()')
console.log(Math.round('5,4'), 'Math.round()')

// Math.ceil -----------------------------------------

console.log(Math.ceil(.95));
// Expected output: 1

// Math.floor ---------------------------------------
console.log(Math.flor(4.6), 'Math.floor()')

// MAth.sqrt --------------------------------------
console.log(Math.sqrt(8), 'Math.sqrt()')

// MAth.pow --------------------------------------
console.log(Math.pow(8,3), 'Math.pow()')

// MAth.random --------------------------------------

console.log(Math.random())



  return (
    <>
    <div>addResult {addResult}</div>
    <div>substResult {substResult}</div>
    <div>multiplyResult {multiplyResult}</div>
    <div>divideResult {divideResult}</div>
    <div>moduloResult {moduloResult}</div>
    <div>powerResult {powerResult}</div>
    <IfStatements />

    </>
  );
}