import './styles.css';

const obj = {
  name: 'dog',
  legs: 4,
  color: 'white',
};

export function JsFunctions() {
  const animal = ({ color, name, legs }) => {
    return `The ${color} ${name} has ${legs} legs.`;
  };

  return <div>{animal(obj)}</div>;
}
//   const users = [
//     {
//       name: 'Kamil',
//       age: 33,
//       sport: 'Basketball',
//       image: 'https://shorturl.at/deFU7',
//     },
//     {
//       name: 'Arek',
//       age: 22,
//       sport: 'Volleyball',
//       image: 'https://shorturl.at/itT37',
//     },
//     {
//       name: 'Igor',
//       age: 18,
//       sport: 'Soccer',
//       image: 'https://shorturl.at/vxEUW',
//     },
//     {
//       name: 'Aleksander',
//       age: 25,
//     },
//   ];

//   console.log(users.map((listUsers) => listUsers));

//   return (
//     <div>
//       {users.map(({ name, sport }) => (
//         <div>
//           {' '}
//           {name} plays {sport || 'nothing'}.{' '}
//         </div>
//       ))}
//     </div>
//   );
// }

//   const planets = [
//     'Słońce',
//     'Merkury',
//     'Wenus',
//     'Ziemia',
//     'Mars',
//     'Jowisz',
//     'Saturn',
//     'Uran',
//     'Neptun',
//   ];

//   const planetsNumber = 3;

//   function whatPlanetIsIt(num) {
//     return planets[num];
//   }

//   return (
//     <div>
//       {whatPlanetIsIt(planetsNumber)} jest {planetsNumber} planetą od Słońca.
//     </div>
//   );
// }

// function sum(...arg) {
//   console.log(arg);
// }
// sum(1, 2);

// ALBO:
// function sum({ age }) {
//   console.log(age);
// }

// function sumParam(num, num2) {
//   if (num > 50) {
//     return num + Number(num2);
//   } else {
//     return num;
//   }
// }

// console.log(sumParam(59, '41'));

// function isBiggerOrSmaller(a, b) {
//   if ((a > 50, b < 60)) {
//     return 'yes, it is: ' + b;
//   } else {
//     return false;
//   }
// }
// console.log(
//   'is the num bigger than 50 and smaller than 60?',
//   isBiggerOrSmaller(55, 150)
// );

//POZOSTAŁE SPOSOBY ZAPISANIA TEJ SAMEJ FUNKCJI:

// function isBigger2(a) {
//   if (a > 50) {
//     return true;
//   }
//   return false;
// }

// console.log('2: is bigger than 50?', isBigger2(15));

// function isBigger3(a) {
//   return a > 50 ? true : false;
// }
// console.log('3: is bigger than 50?', isBigger3(1555));

// function isBigger4(a) {
//   return a > 50;
// }
// console.log('4: is bigger than 50?', isBigger4(1));

// function myFunction() {
//   return {
//     first: 'Name',
//   };
// }

// console.log(myFunction().first === 'Name');

// myFunction(); // wywołanie funkcji - tutaj też może być, funkcja "idzie do góry" ==hoisting?

// function myFunction() {
//   console.log('...');
// }

// myFunction(); // błąd - nie powinno się tutaj wywoływać, w takim przypadku powinno być na dole, po funkcji

// const myFunction = function () {
//   console.log('...======');
// };

//DESTRUKTURYZACJA: (...arg):

// function sum(...arg) {
//   console.log(arg);
// }
// sum(1, 2);

// ALBO:
// function sum({ age }) {
//   console.log(age);
// }

// sum({ age: 15, city: 'Warsaw' });

// function sum() {
//   console.log(arguments);
// }

// sum(1, 2, 3);

//FUNKCJA STRZAŁKOWA - krótszy zapis tradycyjnej funkcji, 'this' jest różnicą - SPR.

// const text = function (a = 1, b = 2) {
//   return a + b;
// };
// TO SAMO CO
// const text2 = (a = 1, b = 2) => {
//   return a + b;
// };
//ALBO
// [3, 1, 2].sort(function (a, b) {});
// [3, 1, 2].sort((a, b) => {});

// WYRAŻENIE FUNKCYJNE --nie trzeba nazywać funkcji, żeby jej użyć (==funkcja anonimowa)
// const text = function (a = 1, b = 2) {
//   return a + b;
// };

// console.log(text(10, 10));

// function logText(a, b) {
//   return a + b;
// }

// console.log(logText(1, 50));
// console.log(logText(11, 5));

// const text = 'Test 1';

// const text2 = 'Test 2';

// function logText(par1, par2, par3, par4 = 'text domyślny') {
//   return par1 + ' ' + par2 + ' ' + par3 + ' ' + par4;
// }

// console.log(logText(text, text2, '66', undefined));

// =>=>=>=> w tym przypadku wyświetli się 'text domyślny'

// const text = 'Test 1';

// const text2 = 'Test 2';

// function logText(par1, par2, par3, par4) {
//   return par1 + ' ' + par2 + ' ' + par3.age + ' ' + par4;
// }

// console.log(logText(text, text2, { age: 666 }));

// console.log('ala ma kota'.toUpperCase());
