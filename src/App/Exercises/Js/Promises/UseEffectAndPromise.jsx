// Zadanie 1:
// dodajmy diva na napis
// napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm
// resolved :)"

import { useEffect, useState } from 'react';

// użyjmy useState do zapisania odpowiedzi z promisa.
export const UseEffectAndPromise = () => {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 1000);
    });
  };

  useEffect(() => {
    fetchData().then((res) => setMessage(res));
  }, []);
  return <div>{message}</div>;
};
