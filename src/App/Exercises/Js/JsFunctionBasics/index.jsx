import './styles.css';

function newObj(props) {
  return { ...props, nested: props.nested ? newObj(props.nested) : undefined };
}

function sum(start, ...args) {
  let result = start;
  args.forEach((number) => {
    result = result + number;
  });

  return result;
}

function multiplyBy(factor = 1, ...args) {
  return args.map((number) => number * factor).join(',');
}

// function sum() {
//   let result = 0;
//   // console.log(arguments[1]);
//   arguments.forEach((number) => {
//     result = result + number;
//   });

//   return result;
// }

function tags(...tags) {
  // console.log(...tags);
  return tags.join(',');
}

const l1 = 1;
const l2 = 1;
console.log(l1 === l2); // true
const o1 = {};
const o2 = {};
console.log(o1 === o2); // false

export function ExampleComponent({ factor, x }) {
  return (
    <>
      <p>ExampleComponent:</p>
      <div>{multiplyBy(factor, x, 3, 4)}</div>
      <div>{tags(3, 'react', 8, 'js', JSON.stringify({ foo: 'bar' }))}</div>
    </>
  );
}

export const JsFunctionBasics = () => {
  const props = {
    factor: 5,
    x: 10,
    nested: { y: 7 },
  };

  const props2 = newObj(props);

  props.nested.y = 13;
  console.log(props2.nested.y);

  return (
    <>
      <div>{sum(1, 2, 3, 4)}</div>
      <div>{multiplyBy(7, 2, 3, 4)}</div>
      <ExampleComponent factor={5} {...props} />
    </>
  );
};

//funkcja nazwana

// //funkcja anonimowa
// // function () { }

// //funckcje strzałkowe
// // () => { };
// const f2 = () => {
//   return { foo: 'bar' };
// };

// const f3 = () => ({ foo: 'bar' });
// const multiplyBy2 = (number) => {
//   // console.log(typeof number);
//   return number * 2;
// };

// const array = [1, 2, 3];
// array.map(multiplyBy2);
// multiplyBy2();

// function funkcjaZewnetrzna() {
//   function funkcjaWewnetrzna() {
//     // debugger;
//     console.log('To jest funkcja wewnętrzna');
//   }
//   return funkcjaWewnetrzna;
// }
// funkcjaZewnetrzna()();

// const obj = {
//   x: {
//     foo: 'bar',
//     prop: {
//       name: 'Nikolas',
//     },
//   },
// };
// const splaszcz = (obj) => {
//   let temp;
//   for (const key in obj) {
//     temp[key] = splaszcz(obj[key]);
//   }
// };
// splaszcz();
