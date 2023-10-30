import { useState } from "react";

export const Promises = () => {
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


// //standard of handling promises()
// const myPromise = new Promise((resolve, reject) => {
//   // Tutaj znajduje się asynchroniczna operacja
//   // Możesz wywołać resolve() w przypadku sukcesu lub reject() w przypadku błędu
// });

// myPromise
//   .then((result) => {
//     // Obsługuje sukces
//   })
//   .catch((error) => {
//     // Obsługuje błąd
//   }).finally(
    
//   );


//   //syntactic sugar (es6)
//   async 
//   await 



//   try {
//     // Blok kodu, który może generować wyjątki
//   } catch (error) {
//     // Obsługa błędu
//   } finally {
//     // Opcjonalny blok kodu, który zostanie wykonany niezależnie od tego, czy wystąpił błąd czy nie
//   }