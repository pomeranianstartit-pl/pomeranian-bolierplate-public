import './style.css'

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
    }, 250)
  );

function Promise_ALL(arr) {
  const promise_all = Promise.all(arr);
  promise_all
    .then(() => {
      console.log('all promises resolved', promise_all);
    })
    .catch(() => {
      console.log('at least one promise is rejected', promise_all);
    });
}

function Promise_ALL_SETTLED(arr) {
  const promise_all_settled = Promise.allSettled(arr);
  promise_all_settled
    .then(() => {
      console.log('all promises done', promise_all_settled);
    })
    .catch(() => {
      console.log('NOT all promises done', promise_all_settled);
    });
}

function Promise_ANY(arr) {
  const promise_any = Promise.any(arr);
  promise_any
    .then(() => {
      console.log('any promise resolved', promise_any);
    })
    .catch(() => {
      console.log('all promises rejected', promise_any);
    });
}

function Promise_RACE(arr) {
  const promise_race = Promise.race(arr);
  promise_race
    .then(() => {
      console.log('first promise resolved', promise_race);
    })
    .catch(() => {
      console.log('none of promise succeeded', promise_race);
    });
}

export const PromisesMethodsTraining = () => {
  return (
    <div>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ALL([fetchDataFast(), fetchDataLong()]);
          }}
        >
          Promise_ALL
        </button>
        fetchDataFast =*= fetchDataLong
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ALL([fetchDataFast(), fetchDataLong(), fetchDataError()]);
          }}
        >
          Promise_ALL
        </button>
        fetchDataFast =*= fetchDataLong =*= fetchDataError
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ALL_SETTLED([fetchDataFast(), fetchDataLong()]);
          }}
        >
          Promise_Settled
        </button>
        fetchDataFast =*= fetchDataLong
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ALL_SETTLED([
              fetchDataFast(),
              fetchDataLong(),
              fetchDataError(),
            ]);
          }}
        >
          Promise_Settled
        </button>
        fetchDataFast =*= fetchDataLong =*= fetchDataError
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ANY([fetchDataFast(), fetchDataLong()]);
          }}
        >
          Promise_Any
        </button>
        fetchDataFast =*= fetchDataLong
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_ANY([fetchDataFast(), fetchDataLong()]);
          }}
        >
          Promise_Any
        </button>
        fetchDataFast =*= fetchDataLong =*= fetchDataError
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_RACE([fetchDataFast(), fetchDataLong()]);
          }}
        >
          Promise_Race
        </button>
        fetchDataFast =*= fetchDataLong
      </p>
      <p>
        <button
          className="button-promise"
          onClick={() => {
            Promise_RACE([fetchDataFast(), fetchDataLong(), fetchDataError()]);
          }}
        >
          Promise_Race
        </button>
        fetchDataFast =*= fetchDataLong =*= fetchDataError
      </p>
    </div>
  );
};
