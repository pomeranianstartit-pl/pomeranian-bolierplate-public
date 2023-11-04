export const PromisesMethods = () => {
  // ---------------------------------------
  // Promise.all([new Promise(), new Promise()]) = [tablica promisów]

  // Oczekuje na spełnienie WSZYSTKICH promisów w przekazanej tablicy promisów

  // FULLFILLED - Zwraca nowy promis który zostaje spełniony, gdy wszystkie promisy z tablicy zostaną spełnione
  // REJECTED - Zwraca odrzucony promis, jeśli którykolwiek z promisów w tablicy zostanie odrzucony

  const promisses_all = [
    Promise.resolve('Resolved!'),
    Promise.reject('Resolved!'),
  ];

  const allPromises = Promise.all(promisses_all);

  allPromises
    .then(() => {
      console.log('all promises resolved');
    })
    .catch(() => {
      console.log('one of promises rejected');
    });

  // ---------------------------------------
  // Promise.allSettled([new Promise(), new Promise()]) = [tablica promisów]

  // Oczekuje na wykonanie WSZYSTKICH promisów w przekazanej tablicy promisów
  //                  - niezależnie od tego czy zostały spełione czy odrzucone

  // FULLFILLED - Zwraca nowy promis który zostaje spełniony, gdy wszystkie promisy z tablicy zostaną wykonane
  // REJECTED - Nigdy nie zostanie odrzucony ten promis

  const promisses_allSettled = [
    Promise.resolve('Resolved!'),
    Promise.reject('Rejected!'),
  ];

  const allSettledPromises = Promise.allSettled(promisses_allSettled);

  allSettledPromises.then(() => {
    console.log('all promises finished');
  });

  // ---------------------------------------

  // Promise.any([new Promise(), new Promise()]) = [tablica promisów]

  // Oczekuje na spełnienie JAKIEGOKOLWIEK promisu w przekazanej tablicy promisów

  // FULLFILLED - Zwraca nowy promis który zostaje spełniony, gdy którykolwiek z promisów w tablicy zostanie spełniony.
  // REJECTED - Zwraca odrzucony promis, jeśli wszystkie promisy w tablicy zostaną odrzucone.

  const promisses_any = [
    Promise.reject('Rejected!'),
    Promise.resolve('Resolved!'),
    Promise.reject('Rejected!'),
    Promise.reject('Rejected!'),
  ];

  const anyPromises = Promise.any(promisses_any);

  anyPromises
    .then(() => {
      console.log('any promise resolved');
    })
    .catch(() => {
      console.log('all promises rejected');
    });

  //Promise race() example (it will return first resolved Promise - RACE!!)

  const promise1111 = new Promise((resolve) =>
    setTimeout(() => resolve('Promise 1'), 400)
  );
  const promise2222 = new Promise((resolve) =>
    setTimeout(() => resolve('Promise 2'), 500)
  );

  const promiseRace = Promise.race([promise1111, promise2222]).then(
    (result) => {
      console.log('Promise.race pierwszy rozwiązany promise:', result);
    }
  );

  console.log('promiseRace:', promiseRace);

  return <div>Metody w Promise</div>;
};
