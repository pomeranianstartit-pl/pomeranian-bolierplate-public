import './styles.css';

export const Currying = () => {
  // const add3 = (a, b, c) => a + b + c;
  // // console.log('wynik', add3(1, 2, 3));

  // function sum(a) {
  //   return (b) => {
  //     return (c) => {
  //       console.log(a + b + c);
  //       return sum(a + b + c);
  //     };
  //   };
  // }

  var osoba = {
    imie: 'Piotr',
    nazwisko: 'Zalewski',
    wiek: 44,
    kolorOczu: 'niebieski',
  };

  var info = '';

  var info = '';
  for (const x in osoba) {
    info = info + osoba[x];
  }

  const car = {
    brand: 'Mercedes',
    color: 'czerwony',
    // showText() { ... }
  };

  let text = [];

  for (let i = 0; i < 5; i++) {
    text += 'The number is ' + i + '<br>';
  }
  console.log(text.join('+'));

  // for (const dupa in car) {
  //   console.log(dupa); //brand, color, showText
  // }
  console.log(info);
  return <div>Change me X</div>;
};
