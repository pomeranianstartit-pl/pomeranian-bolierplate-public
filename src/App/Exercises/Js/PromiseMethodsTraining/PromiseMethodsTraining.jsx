import React from 'react';

import './style.css';

export function PromiseMethodsTraining() {
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
 
  const cb = (log) => {
    if (log.status === 'rejected') {
      console.error(log?.reason?.stack);
    } else {
      console.log(log);
    }
  };
 
  const logger = (log) => console.log(log);
  const logMultiple = (logs) => logs.forEach(cb);
  const errorLogger = (err) => console.error(err);
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      {/* <button onClick={() => fetchDataFast()}>fetchDataFast</button>
      <button onClick={() => fetchDataLong()}>fetchDataLong</button>
      <button onClick={() => fetchDataError()}>fetchDataError</button> */}
      {/* Methods */}
      {/* ALL */}
      <button
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong()]).then(logger)
        }
      >
        Get all
      </button>
      <button
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(logger)
            .catch(errorLogger)
        }
      >
        Get all with error
      </button>
      {/* ALLSETTLED */}
      <button
        onClick={() =>
          Promise.allSettled([fetchDataFast(), fetchDataLong()])
            .then(logger)
            .catch(errorLogger)
        }
      >
        Get allSettled without error
      </button>
      <button
        onClick={() =>
          Promise.allSettled([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ])
            .then(logMultiple)
            .catch(errorLogger)
        }
      >
        Get allSettled with error
      </button>
      {/* ANY */}
      <button
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then(logger)
            .catch(errorLogger)
        }
      >
        Get any without error
      </button>
      <button
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(logger)
            .catch(errorLogger)
        }
      >
        Get any with error
      </button>
      {/* RACE */}
      <button
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong()])
            .then(logger )
            .catch(errorLogger)
        }
      >
        Get race without error
      </button>
      <button
        onClick={() =>
          Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(logger )
            .catch(errorLogger)
        }
      >
        Get race with error
      </button>
    </div>
  );
}
