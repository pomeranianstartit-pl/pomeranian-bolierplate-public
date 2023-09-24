import { useState } from 'react';
import './styles.css';

// let counter = 0;
// setInterval(() => {
//   counter = counter + 10;
//   console.log('dodaje 10');
// }, 10);
// setInterval(() => {
//   counter = counter - 10;
//   console.log('odejmuje 10');
// }, 10);

export const PromisesAndMe = () => {
  const [sum, setSum] = useState(0);
  const [lista, setLista] = useState([]);
  //kod synchroniczny - wykonuje się linijka po linijce
  // łatwiejsze zrozumienie kodu przy synchronicznym
  function test1() {
    console.log('test1');
  }
  function test2() {
    console.log('test2');
  }

  console.log(1);
  console.log(2);
  test1();
  test2();

  //kod asynchroniczny - kod nie jest wykonywany po kolei , oczekuje na COŚ, co zakończy się w czasie późniejszym
  console.log('before timeout');
  setTimeout(() => console.log('timeout 1'), 10);
  console.log('after timeout');
  //setTimeout lista rzeczy do zrobienia pozniej = [wydrukuj timeoue 1 pocz czasie (0ms)]

  // JS ma lista rzeczy do zrobienia = [Task,Task(timeout)]

  //przykłady operacji asynchronicznych : setTimeout,SetInterval, oczekiwanie na odpowiedz serwera z treścią strony , plikiem itp

  //kod synchroniczny blokuje przeglądarkę
  //ASYNCHORNICZNOŚĆ -> wydajniejsze, bardziej płynne działanie strony i interakcje uzytkownika ze strona/aplikacja

  const freeze = () =>
    Array(1000000)
      .fill(0)
      .map((_, index) => <li key={index}>{index}</li>);

  //problemy / wyzwania z obsluga bledow w kodzie asynchronicznym
  try {
    console.log('trying something');
    setTimeout(() => {
      try {
        throw new Error('coś poszło źle');
      } catch (error) {
        console.log('bład setTimeout', error.mesage);
      }
    });
  } catch (error) {
    console.log('zlapalem blad', error);
  }

  //Asynchronicznośc pozwala na równoległe wykonywanie operacji
  // *kod JS wykonywany jednowątkowo (zwykle - są od tego wyjątki)

  // progrmowanie asynchroniczne -> problem wyścigów (RACE CONDITION)
  //tam gdzie wiele operacji może być wykonywanych jednocześnie
  //pojawia sie problem nieoczekiwanych błędów

  function jestemCallbackiem(num) {
    console.log('jestem callbackiem, wywołana z parametrem:', num);
  }
  //fukcja z callbackiem

  function handleOnClick(callback) {
    console.log('wykorzystuje callback');
    callback(10);
  }

  const raceCondition = () => {
    let counter = 0;
    const delay = 2000;
    setInterval(() => {
      const newValue = counter + 10;
      console.log('dodano, wynik =', newValue);
      setTimeout(() => (counter = newValue), 0);
    }, delay);
    setInterval(() => {
      const newValue = counter - 10;
      console.log('minus, wynik =', newValue);
      setTimeout(() => (counter = newValue), 0);
    }, delay);
  };

  //Promise first example
  //fcja fetchData -> do generowania promisów
  const fetchData = () => {
    //zwracamy naszą obietnicę (Promise)
    return new Promise((resolve, reject) => {
      //resolve -> fcja która wywołamy gdy sukces
      //reject -> fkcja którą wywołamy gdy jakiś błąd
      setTimeout(() => {
        //w przykładzie symulujemy zachowanie serwera
        const data = { id: 1, name: 'Jan' };
        const err = Math.random() > 0.5 ? 'błąd serwera' : null;
        if (err) {
          //jezeli bład to odrzucamy obietnice
          reject(err);
        }

        //jeżeli OK to wywiązujemy się z obietnicy
        resolve(data);
      }, 1000);
    });
  };
  const handleFetchData = () => {
    fetchData().then(
      (data) => {
        console.log('dane użytkownika: ', JSON.stringify(data));
      },
      (error) => {
        console.log('wystapił błąd:', error);
      }
    );
  };

  const handleFetchData2 = () => {
    fetchData()
      .then((data) => {
        console.log('dane użytkownika: ', JSON.stringify(data));
      })
      .catch((error) => {
        console.log('wystapił błąd:', error);
      });
  };

  const resolvedPromise = Promise.resolve('sukces');
  resolvedPromise
    .then((response) => console.log('resolved value =', response))
    .catch((error) => console.log('rected with error= ', error));

  const rejectedPromise = Promise.reject('failure');
  rejectedPromise
    .then((response) => console.log('Example 2: resolved value =', response))
    .catch((error) => console.log('Example2: rected with error = ', error));

  //Pormises - states
  // PENDING - stan początkowy , w którym Promise nie został jeszczze rozwiązany ani odrzucony
  //w tym stanie możemy zarówno rozwiązać lub odrzucić Promise

  const handlePending = () => {
    const pendingPromise = new Promise((resolve, reject) => {});
    console.log('pending promise:', pendingPromise);
  };

  // FULFILLED
  // stan w którym obietnica została rozwiązana
  //w tym stanie NIE możemy rozwiązać lub odrzucić Promise
  const handleFulfilled = () => {
    const fulfilledPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('sukces');
      }, 500);
    });
    fulfilledPromise.then(() =>
      console.log('fulfilledPromise:', fulfilledPromise)
    );
    // console.log('pending promise:', fulfilledPromise);
  };
  //REJECTED
  //stan w którym obietnica została odrzucona
  //w tym stanie NIE możemy rozwiązać lub odrzucić Promise
  const handleRejected = () => {
    const rejectedPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('sukces'));
      }, 500);
    });
    rejectedPromise
      .then(() => console.log('rejectPromise:', rejectedPromise))
      .catch((errr) =>
        console.log('rejectedPromise:', rejectedPromise, errr.mesage)
      );
  };

  const promiseFunction = (size, delay) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (size > 20) {
          reject('Size too large, max20');
        } else {
          const tablica = Array(size)
            .fill(0)
            .map((_, index) => index)
            .map((id) => <li key={id}>{id}</li>);
          resolve(tablica);
        }
      }, delay);
    });

  const handleGetList = () => {
    promiseFunction(10, 1000)
      .then((result) => {
        setLista(result);
        // throw new Error('coś poszło nie tak!!!');

        return 'udało sie pobrac';
      })
      .then((message) => console.log('!!!chained promise', message))

      .catch((error) => console.log('błąd pobrania listy', error))
      .finally(() => console.log('zapisz logi'));
  };

  return (
    <div>
      <h1>Promisy w JS</h1>
      <h2>Intro</h2>
      <button onClick={freeze}>Freez</button>
      <button onClick={() => handleOnClick(setSum)}>
        Przycisk z callbackiem
      </button>
      <p>sum: {sum}</p>

      <button onClick={() => handleOnClick(jestemCallbackiem)}>
        Przycisk z callbackiem 2
      </button>
      <button onClick={raceCondition}>Race Condition</button>
      <h2>Promise</h2>
      <p>
        Obiekt który pozwala łączyć wykonanie asynchronicznej operacji z kodem
        oczekującym na jej zakończenie/wynik/
      </p>
      <button onClick={handleFetchData}>Fetch data</button>
      <button onClick={handleFetchData2}>Fetch data 2</button>
      <h3>Stany promisów</h3>
      <button onClick={handlePending}>Pending</button>
      <button onClick={handleFulfilled}>Fulfilled</button>
      <button onClick={handleRejected}>Rejected</button>
      <h2>Praktyka/Ćwiczenia</h2>
      <button onClick={handleGetList}>Pobierz listę</button>
      <p>lista elementów:</p>
      <ul>{lista}</ul>
    </div>
  );
};
