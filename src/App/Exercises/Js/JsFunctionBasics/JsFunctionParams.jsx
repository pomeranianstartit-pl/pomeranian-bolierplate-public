export const JsFunctionParams = ({ name, surname }) => {
  //   console.log('JsFunctionParams props: ', props);
  //   console.log('JsFunctionParams props.name: ', props.name);
  //   const { name, surname } = props;

  console.log('JsFunction destrukturyzacja: ', { name });
  console.log('JsFunction destrukturyzacja: ', { surname });

  const suma = (a, b) => {
    // console.log('Parametry sumy: ', a, b);
    return a + b;
  };

  const pomnóżDodajWiele = (mnożnik, l1, l2, l3, ...rest) => {
    console.log('rest : ', rest);
    const suma = rest.reduce((prev, curr) => prev + curr, 0);
    console.log('suma reduce ', suma);
    return mnożnik * (l1 + l2 + l3);
  };
  console.log(
    'pomnóżDodajWiele wynik: ',
    pomnóżDodajWiele(2, 1, 1, 1, 5, 4, 4, 4, 4)
  );

  const SetGender = (names) => {
    const result = names.map((name) => {
      if (name.endsWith('a')) {
        return [name, 'kobieta'];
      } else {
        return [name, 'mężczyzna'];
      }
    });
    console.log(result, 'SetGender Function');
    return result;
  };

  SetGender(['Ania', 'Martyna', 'Jerzy']);

  const domylnaWartosc = (mnożnik, liczba = 4) => mnożnik * liczba;
  console.log('funkcja z domyślną wartością :', domylnaWartosc(8));

  function funkcjaArguments() {
    console.log('funkcjaArguments ', arguments[0] * arguments[1]);
  }

  funkcjaArguments(7, 2);

  const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    {
      firstName: 'Johnatan',
      lastName: 'Alvi',
      age: 60,
    },
  ];

  const addOccupation = (array) => {
    const result = array.map((person) => {
      return {
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age,
        occupation: '',
      };
    });
    return result;
  };

  console.log(people, '------ people');
  const changedPeople = addOccupation(people);
  changedPeople[0].occupation = 'welder';
  changedPeople[1].occupation = 'saw operator';
  console.log(changedPeople, '------ changed people');


  return (
    <div>
      <h2>Parametry funkcji</h2>
      <p>Wywołanie funkcji z parametrami {suma(1, 2)}</p>
      <p>Wywołanie funkcji za dużo parametrów {suma(1, 2, 3)}</p>
      <p>Wywołanie funkcji za mało parametrów {suma(1)}</p>
    </div>
  );
};
