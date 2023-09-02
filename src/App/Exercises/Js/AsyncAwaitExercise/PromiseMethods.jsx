// import { useState } from 'react';

// const DEALY = 100;

// function getSomething(size, delay = DEALY) {
//     return new Promise((resolve, _) => {
//         setTimeout(() => {
//             const result = Array(size).fill(0).map((_, index) => { return ({index})});
//             resolve('Success:' +result.lenght);
//         }, delay);
//     });
// }

// export function PromiseMethods() {
//     const [result, setResult] = useState('empty');

//   return (
//     <div className="promise-excercise">
//       <h3>Promise MEthods</h3>
//       <button type="button" onClick={() => ()}>
//         Start
//       </button>
//       <button type="button" onClick={() => setResult('cleared')}>
//         Clear
//       </button>
//       <div>result: {result}</div>
//     </div>
//   );
// }
