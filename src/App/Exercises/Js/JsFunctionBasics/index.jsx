import './styles.css';

export function Exercise() {
  return <div>X</div>;
}

// funkcja nazwana
function f1() {}

const x = f1();

// funkcja anonimowa

// funkcja strzałkowa
const f2 = () => {
  // ...
  // ...
  // ...

  return () => {};
};
const f3 = () => ({ foo: 'bar' });

f1(function () {});
f2(() => {});

const multiplyBy2 = (number) => {
  if (number === undefined) {
    return 'brak argumentu';
  }
  return number * 2;
};

const array = [1, 2, 3];
array.map(multiplyBy2);

multiplyBy2(1, 2, 3, 4, 5, 6, 7);
multiplyBy2();

function funkcjaZewnętrzna() {
  function funkcjaWewnętrzna() {
    debugger;
    console.log('To jest funkcja wewnętrzna');
  }
  return funkcjaWewnętrzna;
}

funkcjaZewnętrzna()();

const obj = {
  x: {
    foo: 'bar',
    prop: {
      name: 'Michał',
    },
  },
};

const splaszcz = (obj) => {
  let temp = {};
  for (const key in obj) {
    temp[key] = splaszcz(obj[key]);
  }
};
