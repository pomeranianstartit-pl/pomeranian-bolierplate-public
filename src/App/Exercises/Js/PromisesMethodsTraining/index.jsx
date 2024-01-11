export const Exercise = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );
  const All_promises = (arr) => {
    const allPromises = Promise.all(arr);
    allPromises
      .then(() => {
        console.log('all promises resolved');
      })
      .catch(() => {
        console.log('one of promises rejected');
      });
  };
  const settled_promises = (arr) => {
    const settledPromises = Promise.allSettled(arr);
    settledPromises
      .then(() => {
        console.log('all promises resolved');
      })
      .catch(() => {
        console.log('all promises rejected');
      });
  };
  const any_promises = (arr) => {
    const anyPromises = Promise.any(arr);
    anyPromises
      .then(() => {
        console.log('any promises resolved');
      })
      .catch(() => {
        console.log('all promises rejected');
      });
  };
  const race_promises = (arr) => {
    const racePromises = Promise.race(arr);
    racePromises
      .then((result) => {
        console.log('Promise.race pierwszy rozwiązany promise:', result);
      })
      .catch(() => {
        console.log('all of promises rejected');
      });
  };

  return (
    <div>
      <p>
        Promise.all dla fetchDataFast(), fetchDataLong()
        <button
          onClick={() => All_promises([fetchDataFast(), fetchDataLong()])}
        >
          a
        </button>
      </p>
      <p>
        {' '}
        Promise.all dla fetchDataFast(), fetchDataLong(), fetchDataError()
        <button
          onClick={() =>
            All_promises([fetchDataFast(), fetchDataLong(), fetchDataError()])
          }
        >
          b
        </button>
      </p>
      <p>
        {' '}
        Promise.allSettled dla fetchDataFast(), fetchDataLong()
        <button
          onClick={() => settled_promises([fetchDataFast(), fetchDataLong()])}
        >
          c
        </button>
      </p>
      <p>
        Promise.allSettled dla fetchDataFast(), fetchDataLong(),
        fetchDataError()
        <button
          onClick={() =>
            settled_promises([
              fetchDataFast(),
              fetchDataLong(),
              fetchDataError(),
            ])
          }
        >
          d
        </button>
      </p>
      <p>
        Promise.any dla fetchDataFast(), fetchDataLong()
        <button
          onClick={() => any_promises([fetchDataFast(), fetchDataLong()])}
        >
          e
        </button>
      </p>
      <p>
        Promise.any dla fetchDataFast(), fetchDataLong(), fetchDataError()
        <button
          onClick={() =>
            any_promises([fetchDataFast(), fetchDataLong(), fetchDataError()])
          }
        >
          f
        </button>
      </p>
      <p>
        Promise.race dla fetchDataFast(), fetchDataLong(), fetchDataError()
        <button
          onClick={() =>
            race_promises([fetchDataFast(), fetchDataLong(), fetchDataError()])
          }
        >
          g
        </button>
      </p>
      <p>
        Promise.race dla fetchDataFast(), fetchDataLong()
        <button
          onClick={() => race_promises([fetchDataFast(), fetchDataLong()])}
        >
          h
        </button>
      </p>
    </div>
  );
};
