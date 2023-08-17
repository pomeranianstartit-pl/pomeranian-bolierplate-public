// Zadanie 1:
// dodajmy diva na napis
// napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm
// resolved :)"

import { useEffect, useState } from 'react';

export const UseEffectAndPromise = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getMessage = () => {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
          resolve('Promise fullfield ;)');
        } else {
          reject('Promise rejected ;c');
        }
      });
    };

    async function resolvePromise() {
      try {
        const result = await getMessage();
        console.log(result);
        setMessage(result);
      } catch (error) {
        console.log(error);
        setMessage(error);
      } finally {
        console.log('Promise resolved');
      }
    }

    resolvePromise();
  }, []);

  return (
    <div>
      Message: <h1> {message}</h1>
    </div>
  );
};
