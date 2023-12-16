import { useEffect, useState } from 'react';

export const PromiseHandling = () => {
  const [text, setText] = useState('Ładowanie...');
  const [userData, setUserData] = useState(null);

  const simplePromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        const data = {
          name: 'Jan',
          surname: 'Doe',
          age: 25,
        };
        resolve(data);
      } else {
        const err = {
          message: 'Error',
          code: 404,
        };
        reject(err);
      }
    }, 2000);
  });
  // Reagowanie na priomies za pomocą then i catch
  // jakiśPromise.then(() => {...}).catch(() => {....}.finally(() => {...}))
  useEffect(() => {
    simplePromise
      .then((data) => {
        console.log(data, 'dane z resolve');
        setUserData(data);
        setText('...Promise resolved...');
      })
      .catch((err) => {
        console.log(err, 'dane z reject');
        setText('...Promise rejected...');
      })
      .finally(() => {
        console.log('Promise finished');
      });
  }, []);
  return (
    <div>
      Promise handling
      <div>{text}</div>
      {userData && (
        <div>
          {userData.name}
          {userData.surname}
          {userData.age}
        </div>
      )}
    </div>
  );
};
