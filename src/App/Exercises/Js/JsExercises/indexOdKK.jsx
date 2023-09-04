// export const JsNumbersTraining = () => {
//   // ---------------------------------------------------
//   // Ex.1

//   let age = 18;
//   let hasDriverLicense = true;
//   let hasCar = true;
//   function canDrive(age, hasDriverLicense, hasCar) {
//     const checkAge =
//       age >= 18
//         ? hasDriverLicense
//           ? hasCar
//             ? 'You can drive your car!'
//             : 'You can drive a rental car.'
//           : "You can't drive without a driver's license."
//         : 'You are too young to drive.';
//     console.log(checkAge);
//   }
//   function hasEnough(hasEnough) {
//     const checkValue = hasEnough ? true : false;
//     console.log(checkValue);
//   }
//   canDrive(age, hasDriverLicense, hasCar);
//   hasEnough(true);

//   // ---------------------------------------------------
//   // Ex.2

//   function isStringShort(string) {
//     if (string.length < 10) return true;
//     if (string.length >= 10) return false;
//   }
//   console.log(isStringShort('abcde'));

//   // ---------------------------------------------------
//   // Ex.3

//   function circleArea(radius) {
//     const area = Math.PI * radius ** 2;
//     console.log(area.toFixed(2));
//   }
//   circleArea(2);

//   // ---------------------------------------------------
//   // Ex.4

//   function changeNumberToMark(number) {
//     switch (number.toString()) {
//       case '1':
//         console.log('niedostateczny');
//         break;
//       case '2':
//         console.log('dopuszczający');
//         break;
//       case '3':
//         console.log('dostateczny');
//         break;
//       case '4':
//         console.log('dobry');
//         break;
//       case '5':
//         console.log('b.dobry');
//         break;
//       case '6':
//         console.log('celujący');
//         break;
//       default:
//         console.log('złe wejście');
//     }
//   }

//   changeNumberToMark(2);
//   changeNumberToMark(10);

//   // ---------------------------------------------------
//   // Ex.5

//   function ownMax(x, y) {
//     if (x > y) console.log(x);
//     if (x < y) console.log(y);
//     if (x === y) console.log(x);
//   }

//   ownMax(4, 7);

//   // ---------------------------------------------------
//   // Ex.6

//   function sumFloat(x, y) {
//     const sumIt = (parseFloat(x) + parseFloat(y)).toFixed(4);
//     console.log(sumIt);
//   }

//   sumFloat(3.141592, 2.141592);

//   // ---------------------------------------------------
//   // Ex.7

//   function mathRevenge(a, b, c) {
//     const delta = b * b - 4 * a * c;
//     let x1;
//     let x2;

//     if (delta > 0) {
//       x1 = (-b - Math.sqrt(delta)) / 2 / a;
//       x2 = (-b + Math.sqrt(delta)) / 2 / a;
//       console.log(`Pierwiastki to: ${x1.toFixed(2)} i ${x2.toFixed(2)}`);
//     } else if (delta === 0) {
//       x1 = -b / (2 * a);
//       console.log(`Pierwiastek to: ${x1.toFixed(2)}`);
//     } else {
//       console.log('Nie ma pierwiastków');
//     }
//   }

//   mathRevenge(2, 2, -2);

//   // ---------------------------------------------------
//   // Ex.8

//   function getRandom() {
//     const randomNumber = Math.random() * 4 + 1;
//     console.log(randomNumber);

//     const randomInteger = Math.floor(Math.random() * 5) + 1;
//     console.log(randomInteger);
//   }

//   getRandom();

//   // ---------------------------------------------------
//   // Ex.8B

//   function getRandomB(x, y) {
//     const randomRange = Math.random() * (x - y) + y;
//     console.log(randomRange);
//   }

//   getRandomB(4, 5);

//   // ---------------------------------------------------
//   // Ex.9

//   function arithmeticAverage(x, y) {
//     if (!isNaN(x) && !isNaN(y)) {
//       const average = (x + y) / 2;
//       console.log(average);
//     } else {
//       console.log('Błędne dane');
//     }
//   }

//   arithmeticAverage(1, 3);

//   // ---------------------------------------------------
//   // Ex.10

//   function absoluteValue(x) {
//     !isNaN(x)
//       ? x < 0
//         ? console.log(-x)
//         : console.log(x)
//       : console.log('Błędne dane!');
//   }

//   absoluteValue(-5);

//   // ---------------------------------------------------
//   // Ex.11

//   function integerFunction(x) {
//     // if (x !== 0) {
//     //   if (number % 3 === 0 || number % 5 === 0) {
//     //     console.log(true);
//     //   } else {
//     //     console.log(false);
//     //   }
//     // } else {
//     //   console.log(false);
//     // }

//     if (Number.isInteger(x)) {
//       if (x !== 0) {
//         if (x % 3 === 0 || x % 5 === 0) {
//           console.log(true);
//         } else {
//           console.log(false);
//         }
//       } else {
//         console.log(false);
//       }
//     } else {
//       console.log('Podaj liczbę całkowitą!');
//     }
//   }

//   integerFunction(5);
//   // integerFunction(150);

//   // ---------------------------------------------------
//   // Ex.12

//   function primeNumber(x) {
//     // for (let i = 2; i <= Math.sqrt(x); i++) {
//     //   if (x % i === 0) {
//     //     return false;
//     //   }
//     // }
//     // return true;

//     if (Number.isInteger(x)) {
//       for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i === 0) {
//           return console.log('Nie');
//         }
//       }
//       return console.log('Tak');
//     } else {
//       console.log('Błędne dane');
//     }
//   }

//   primeNumber(7);

//   return <div>JsNumbersTraining</div>;
// };
