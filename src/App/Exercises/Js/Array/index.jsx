import { useState } from 'react';
import './styles.css';

export function Array() {
  const [myList, setMyList] = useState([
    {
      name: 'Andrzej',
      work: 3,
      age: 30,
      adress: {
        city: 'Gdańsk',
        street: 'Prosta',
        postal: '80-760',
      },
      personal: {
        stack: [
          'js',
          'html',
          {
            projects: '20',
            time: '24mth',
          },
        ],
      },
    },
  ]);

  // const list = {
  //   name: 'Andrzej',
  //   work: 3,
  //   age: 30,
  //   personal: {
  //     stack: [
  //       'js',
  //       'html',
  //       {
  //         projects: '20',
  //         time: '24mth',
  //       },
  //     ],
  //   },
  // } || {
  //   name: 'Filip',
  //   work: 5,
  //   age: 29,
  //   personal: {
  //     stack: [
  //       's#',
  //       'js',
  //       {
  //         projects: '30',
  //         time: '45mth',
  //       },
  //     ],
  //   },
  // };

  console.log(myList['name']);

  return (
    <div>hello</div>
    // <div>
    //   {myList
    //     .sort()
    //     .filter((item) => item === 'Ania')
    //     .map((element) => (
    //       <div>{element}</div>
    //     ))}
    // </div>
  );
}
