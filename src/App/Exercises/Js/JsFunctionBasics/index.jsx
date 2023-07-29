import './styles.css';

export const JsFunctionBasics = () => {
  return;
};

//funkcja nazwana
function fun1() { }

//funkcja anonimowa
// function () { }

//funckcje strzałkowe
// () => { };
const f2 = () => {
  return { foo: 'bar' };
};

const f3 = () => ({ foo: 'bar' });
const multiplyBy2 = (number) => {
  // console.log(typeof number);
  return number * 2;
};

const array = [1, 2, 3];
array.map(multiplyBy2);
multiplyBy2();

function funkcjaZewnetrzna() {
  function funkcjaWewnetrzna() {
    // debugger;
    console.log('To jest funkcja wewnętrzna');
  }
  return funkcjaWewnetrzna;
}
funkcjaZewnetrzna()();

const obj = {
  x: {
    foo: 'bar',
    prop: {
      name: 'Nikolas',
    },
  },
};
const splaszcz = (obj) => {
  let temp;
  for (const key in obj) {
    temp[key] = splaszcz(obj[key]);
  }
};
splaszcz();
