import { FakeDataPromise } from './FakeDataPromise';

import './styles.css';
import { useState, useEffect } from 'react';

export const PromiseExcercise = () => {
  //dodajmy do diva na napis
  //napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :) "
  //użyjmy useState do zapisania odpowiedzi z promisa

  const [text, setText] = useState('');

  useEffect(() => {
    const PromiseData = () => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("I'm resolved :)");
        }, 2000);
      })
        .then((result) => {
          setText(result);
        })
        .catch((error) => {
          setText('Error occurred');
        });
    };

    PromiseData();
  }, []);

  return (
    <div>
      <h2>Zadanie useEffect i Promise</h2>
      <div>
        <p>{text}</p>
        <FakeDataPromise />
      </div>
    </div>
  );
};

// wersja Szymona
// const simplePromise = new Promise((resolve, reject) => {
//   resolve('I am resolved');
// });

// console.log(simplePromise, 'simplePromise');

// export const Exercise = () => {
//   const [text, setText] = useState('I am text');

//   useEffect(() => {
//     simplePromise.then((data) => {
//       setText(data);
//     });
//   }, []);
//   return <div>{text}</div>;
// };
