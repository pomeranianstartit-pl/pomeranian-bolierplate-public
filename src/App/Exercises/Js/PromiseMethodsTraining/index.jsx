import './styles.css';

export const PromiseMethodsTraining = () => {
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
      }, 100)
    );

  const resultLogger = (result) => console.log(result);
  const errorLogger = (error) => console.warn(error);

  return (
    <div className="promise-wrapper">
      <h1>PromiseMethodsTraining</h1>

      {/* 1. Promise.all dla fetchDataFast i fetchDataLong */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong()])
            .then((result) => console.log(result))
            .catch((error) => console.warn(error))
        }
      >
        1. Promise.all without error
      </button>

      {/* 2. Promise.all dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        2. Promise all - with error
      </button>

      {/* 3. Promise.allSettled dla fetchDataFast, fetchDataLong */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.allSettled([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        3. Promise allSettled - 2 objects in array with fulfilled status
      </button>

      {/* 4. Promise.allSettled dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.allSettled([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        4. Promise allSettled - 3 objects in array with 2 fulfilled status and 1
        rejected
      </button>

      {/* 5. Promise.any dla fetchDataFast, fetchDataLong */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        5. Promise any - fastest result
      </button>

      {/* 6. Promise.any dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        6. Promise any - fastest result even with rejected promise
      </button>

      {/* 7. Promise.race dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        7. Promise race - fastest result when all fulfilled
      </button>

      {/* 8. Promise.race dla fetchDataLong, oraz fetchDataError */}
      <button
        className="promise-btn"
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
        }
      >
        8. Promise race - no error because of resolved promise was faster
      </button>
    </div>
  );
};
