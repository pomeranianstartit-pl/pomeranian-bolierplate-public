import React, { useState } from 'react';

export const PromiseSS = () => {
  const [text, setText] = useState('Wykonywanie promisa.....');
  const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        const value = 42;
        resolve(value);
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });

  //   myPromise.then(() => {}).catch(() => {}).finally(() => {})

  myPromise
    .then((data) => {
      setText('Promis wykonany');
      console.log(data, 'data jako success');
    })
    .catch((err) => {
      setText('Promis odrzucony');
      console.log(err, 'err jako error');
    })
    .finally(() => {
      console.log('finally');
    });

  console.log(myPromise);
  return (
    <div>
      <div>Status promisa</div>
      <div>{text}</div>
    </div>
  );
};
