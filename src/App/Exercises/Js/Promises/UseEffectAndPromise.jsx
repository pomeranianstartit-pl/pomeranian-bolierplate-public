//Zadanie 1
//    dodajmy diva na napis
//    napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :)"
//    użyjmy useState do zapisania odpowiedzi z promisa.

import { useEffect, useState } from 'react';

export const UseEffectAndPromise = () => {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 1000);
    });
  };

  useEffect(() => {
    fetchData().then((response) => setMessage(response));
  }, []);
  return <div>Wiadomość: {message}</div>;
};

// LINKI POMOCNICZE

// https://javascript.info/promise-basics
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://javascript.info/promise-basics
// https://javascript.info/promise-chaining
// https://javascript.info/promise-error-handling
// https://javascript.info/promise-api
// https://javascript.info/microtask-queue
// https://javascript.info/async-await
// https://www.developerway.com/posts/fetching-in-react-lost-promises
