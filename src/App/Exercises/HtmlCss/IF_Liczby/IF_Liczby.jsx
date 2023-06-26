import './styles.css';

export function IF_Liczby() {
  let a = 5;
  let b = 2;
  
  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

// a = a + 1
// a = a - 3
// a *= 1
// a /= 1
// ...................................................

  const result1 = a > b;
  const result2 = a < b;
  const result3 = a <= b;
  const result4 = a >= b;
  const result5 = a === b;

// IF .....................................

// const parseInt = parseInt('5')
// const parseInt_1 = parseInt(5.7)
// const parseInt_2 = parseInt('a123b')

  console.log(result1, 'a > b')
  console.log(result2, 'a < b')
  console.log(result3, 'a <= b')
  console.log(result4, 'a >= b')
  console.log(result5, 'a === b')

  console.log(Math.round(5.6), 'mathRound')
  console.log(Math.ceil(.95), 'mathCeil')
  console.log(Math.floor(4.6), 'mathFloor')
  console.log(Math.sqrt(8), 'mathSQR')
  console.log(Math.pow(2), 'mathPow')
  console.log(Math.round(Math.random()*100),'random')

  return (
  
  <>

  <div>addResult {addResult}</div>
  <div>substResult {substResult}</div>
  <div>multiplyResult {multiplyResult}</div>
  <div>divideResult {divideResult}</div>
  <div>moduloResult {moduloResult}</div>
  <div>powerResult {powerResult}</div>
  
  </>

  )
}
