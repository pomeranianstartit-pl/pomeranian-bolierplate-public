import { useEffect } from 'react';

import './styles.css';

export function Exercise() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const handleOnClick1 = () => {
    Promise.all([fetchDataFast(), fetchDataLong()]).then((resolve) => {
      console.log(resolve);
    });
  };

  const handleOnClick2 = () => {
    Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (resolve) => {
        console.log(resolve);
      }
    );
  };
  const handleOnClick3 = () => {
    Promise.allSettled([fetchDataFast(), fetchDataLong()]).then((resolve) => {
      console.log(resolve);
    });
  };
  const handleOnClick4 = () => {
    Promise.allSettled([
      fetchDataFast(),
      fetchDataLong(),
      fetchDataError(),
    ]).then((resolve) => {
      console.log(resolve);
    });
  };
  const handleOnClick5 = () => {
    Promise.any([fetchDataFast(), fetchDataLong()]).then((resolve) => {
      console.log(resolve);
    });
  };
  const handleOnClick6 = () => {
    Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (resolve) => {
        console.log(resolve);
      }
    );
  };
  const handleOnClick7 = () => {
    Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (resolve) => {
        console.log(resolve);
      }
    );
  };
  const handleOnClick8 = () => {
    Promise.race([fetchDataLong(), fetchDataError()])
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Ćwiczenie
      <br />
      <button onClick={handleOnClick1}>Promise.all-1</button>
      <br />
      <button onClick={handleOnClick2}>Promise.all-2</button>
      <br />
      <button onClick={handleOnClick3}>Promise.allSettled-1</button>
      <br />
      <button onClick={handleOnClick4}>Promise.allSettled-2</button>
      <br />
      <button onClick={handleOnClick5}>Promise.any-1</button>
      <br />
      <button onClick={handleOnClick6}>Promise.any-2</button>
      <br />
      <button onClick={handleOnClick7}>Promise.race-1</button>
      <br />
      <button onClick={handleOnClick8}>Promise.race-2</button>
    </div>
  );
}
