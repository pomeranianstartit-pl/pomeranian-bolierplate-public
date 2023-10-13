import { Loops } from './Loops';
import './styles.css';

export function JsArraysBasics() {
  // funkcja map()

  //arraysOf Objects

  const peopleData = [
    { id: 1, name: 'John', age: 35, adress: 'Gdansk' },
    { id: 2, name: 'Mat', age: 25, adress: 'Warszawa' },
    { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },
    { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },
  ];

  // const arrowFunction = () => 'testset';

  // map stworzy nowa tablicę

  const names = peopleData.map((person) => person.name);
  console.log('names', names);

  const birthYears = peopleData.map(
    (perrsonObject) => new Date().getFullYear() - perrsonObject.age
  );
  console.log('birthYears', birthYears);

  //filter specyfyfic data

  const over30 = peopleData.filter((dataPerson) => dataPerson.age >= 30);
  console.log('over30', over30);

  const over29 = peopleData.filter(
    (dataPerson) => dataPerson.age >= 30 && dataPerson === 'Wroclaw'
  );
  console.log('over29', over29); // zwróci pustą tablicę, bo nie spełnia obu warunkow

  // push - dodawanie do tablicy

  const array2 = ['Dab', 'Klon', 'Jesion'];

  array2.push('Brzoza');

  console.log(array2);

  const array3 = ['Brzoza', ...array2];
  console.log(['Brzoza', ...array2]); //[ "Brzoza", "Dab", "Klon", "Jesion", "Brzoza" ]
  console.log(array3);

  // pop()
  const number1 = [1, 2, 3, 4, 5];
  const lastValue = number1.pop(); //Usuwa ostatni element i zwraca go
  console.log('lastValue', lastValue);
  console.log(number1); //Tablica po usunięciu: [1, 2, 3, 4]

  // shift()
  const number2 = [1, 2, 3, 4, 5];
  const firstValue = number2.shift(); //Usuwa pierwszy element i zwraca go
  console.log('firstValue', firstValue);
  console.log(number2); //Tablica po usunięciu: [2, 3, 4, 5]

  // spread ... for array
  const numbers3 = [1, 2, 3, 4, 5];
  //destrukturyzacja w JS (ES6)
  const [maciej, dojlido, ...rest] = numbers3;
  console.log(maciej); // Pierwszy element: 1
  console.log(dojlido); // Drugi element: 2
  console.log(rest); // Reszta tablicy: [3, 4, 5]

  // spread for objects
  const objectTest = {
    test1: 'Maciej',
    test2: 'Dojlido',
    test3: 'Gdansk',
  };

  const { test1, test2 } = objectTest;
  console.log('test1', test1); // "Maciej"
  console.log('test2', test2); // "Dojlido"

  //merge and create new array
  const newMergedArray2D = [numbers3, ...array3];
  console.log('newMergedArray2D', newMergedArray2D);

  // concat() zachowuje się jak zapis poniżej
  const newMergedArray1D = [...numbers3, ...array3];
  console.log('newMergedArray1D', newMergedArray1D);

  //array of arrays
  const newMergedArray3D = [numbers3, array3];
  console.log('newMergedArray3D', newMergedArray3D);

  // indexOf()
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  const index = fruits.indexOf('Cherry');
  console.log('index', index); // 2 poniewaz "Cherry" fruits

  console.log('length of fruits', fruits.length); // 4

  //Array methods
  //find, filter, sort, join, reduce, includes, some

  const sortedPeople = peopleData.sort(
    (personA, personB) => personB.age - personA.age
  );
  console.log('sortedPeople', sortedPeople);

  //reduce (mainly used for object transforamation; agregation)

  const ages = peopleData.map((person) => person.age);
  const totalAge = ages.reduce(
    (perviousAge, currentAge) => perviousAge + currentAge,
    0
  );
  console.log(totalAge);

  return (
    <div className="conteiner--arrays-objects">
      <p>Działania na tablicach i obiektach</p>
      <ul>
        {peopleData.map((personalData) => (
          <li>
            <div>Name: {personalData.name}</div>
            <div>Age: {personalData['age']}</div>
            <div>Adress: {personalData.adress}</div>
          </li>
        ))}
      </ul>
      Name: <b>{peopleData[0]['name']}</b>
      <Loops />
    </div>
  );
}
