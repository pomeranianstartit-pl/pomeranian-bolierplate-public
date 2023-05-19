import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function Array() {
  const [objList, setObjList] = useState([
    {
      name: 'Michael',
      address: {
        cities: [
          'Warsaw',
          'Cracow',
          {
            street: 'Klonowa',
            number: 147,
          },
        ],
      },
      age: 30,
      employed: true,
      date: 1684520172,
    },
    {
      name: 'Peter',
      address: {
        cities: [
          'London',
          'Dublin',
          {
            street: 'Tower St',
            number: 97,
          },
        ],
      },
      age: 35,
      employed: false,
      date: 1684509968458,
    },
  ]);

  console.log(objList.map((listElement) => listElement));

  return (
    <div>
      <b>LIST</b>
      {objList.map(({ name, age }) => (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ))}
    </div>
  );
}

// const [myList, setMyList] = useState([
//   'Marcin',
//   'Ania',
//   'Monika',
//   'Iza',
//   'Ania',
//   'Piotr',
// ]);
// console.log(myList.map((item) => item + ' Nazwisko'));
// return (
//   <div>
//     {myList
//       .sort()
//       .filter((item) => item.includes('a'))
//       .map((listElement, index) => (
//         <div>
//           {index}. {listElement}
//         </div>
//       ))}
//   </div>
// );

// const [myList, setMyList] = useState([
//   {
//     name: 'Kamil',
//     age: 99,
//   },
//   {
//     name: 'Ania',
//     age: 99,
//   },
// ]);

// console.log(myList.filter((listElement) => listElement.age === 99));

// const [myList, setMyList] = useState(['Marcin', 'Ania', 'Monika', 'Iza']);

// console.log(myList.filter((listElement) => listElement[0] === 'M')); // znajdź wszystkie imiona na M

// console.log(myList.some((listElement) => listElement === 'Ania'));

// console.log(myList.every((listElement) => listElement === 'Ania'));

// console.log(myList.find((listElement) => listElement.length === 6));

// console.log(
//   myList.filter(
//     (listElement) => listElement.length === 6 || listElement.length === 4
//   )
// );

// console.log(myList.filter((listElement) => listElement.length === 6));

//filtorwanie
// console.log(myList.filter((listElement) => listElement === 'Ania'));
