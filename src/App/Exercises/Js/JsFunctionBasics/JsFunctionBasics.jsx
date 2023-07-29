import './styles.css';

export const JsFunctionBasics = () => {
  return <div>X</div>;
};

//Funkcja nazwana
function f1(){
}
const x = f1();

//Funkcja anonimowa 
//function (){}

//Funkcja strzalkowa 
const f2 = () => ({foo: 'bar'});
const f3 = () => {
  //...
  //....
  //.....
  //......
  //.......
  return () => {};
}
//f1()
//f2()

const multiplyBy2 = (number) => {
  if(number === undefined){
    return 'brak argumentu'
  }
  return number * 2;
};

const array = [1, 2, 3];
array.map(multiplyBy2);

multiplyBy2(1, 2, 3, 4, 5, 6, 7);
multiplyBy2();

function funkcjaZewnetrzna(){
  function funkcjaWewnetrzna(){
    debugger;
    console.log('To jest funkcja wewnetrzna');
  }
  return funkcjaWewnetrzna;
}
funkcjaZewnetrzna()();

const obj = {
  x: {
    foo: 'bar',
    prop: {
      name: 'Yarek',
    },
  },
};

const splaszcz = (obj) => {
  let temp = {};
  for (const key in obj){
    temp[key] = splaszcz(obj[key]);
  }
};