// import './styles.css';

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


console.log('result', result2);

  return (
    <>
    <div>addResult {addResult}</div>
    <div>substResult {substResult}</div>
    <div>multiplyResult {multiplyResult}</div>
    <div>divideResult {divideResult}</div>
    <div>moduloResult {moduloResult}</div>
    <div>powerResult {powerResult}</div>

    </>
  );
}