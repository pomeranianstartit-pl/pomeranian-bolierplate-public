import './styles.css';

// const x = [5, 8, 10, 23, 48, 60];

// for (const numberr of x){
//   console.log(numberr/5);
// }

// const x = [1, 2, 3, 4, 5, 6, 7, 8];

// for (const y of x) {
//   if (y % 2 === 0) {
//     console.log(
//       `%cLiczba ${y} jest parzysta`,
//       'background-color: yellow; color: black'
//     );
//   } else {
//     console.log(
//       `%cLiczba ${y} jest nieparzysta`,
//       'background-color: green; color: black'
//     );
//   }
// }

// const colors = [];
// colors.unshift(1, 2, 3, 4);
// colors.shift();
// colors.push(222, 33, 44, 55);
// colors.pop();
// console.log(colors);

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ['red', 'green', 'blue', true, 123];

// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

// const numbers2 = console.log(numbers.slice(2));
// const numbers3 = console.log(numbers.slice(-3));

// const randomStaff = console.log(colors.splice(-2));
// console.log(colors);

// const newCars = console.log(cars.splice(2, 4));
// console.log(cars);

// const newNumbers = numbers.forEach(number)

// const letters = ['c', 'd'];

// letters.unshift('a', 'b');
// letters.push('e', 'f');
// console.log(letters);
// console.log(letters.includes('c'));

// const food = ['hamburger', 'eggs', 'apple'];
// const numbers = [1, 2, 3];

// const mix = console.log(...numbers, ...food);

// const arry = [1, 5, 13, 26, 48];

// const newArry = arry.map((number) => number * 5);

// console.log(newArry);

// for (const number of newArry) {
//   if (number % 2 === 0) {
//     console.log(`Liczba parzysta: ${number}`);
//   } else {
//     console.log(`Liczba nieparzysta: ${number}`);
//   }
// }

const colour = ['niebieski'];
colour.unshift('pink');
colour.push('white');

for (let i = 0; i < colour.length; i++) {
  console.log(
    `Mój ulubiony kolor to: ${
      colour[i].charAt(0).toUpperCase() + colour[i].slice(1)
    }`
  );
}

export const SelfStudy = () => {
  return <div></div>;
};
