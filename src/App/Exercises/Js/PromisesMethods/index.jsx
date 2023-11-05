export function PromisesMethods() {
  // Promise.all([newPromise, newPromise])
  // Oczekuje na spełnienie wszystkich promisów w przekazanej tablicy promisów

  // FULFILLED -  zwraca nowy promis który zostaje spełniony, gdy wszystkie promisy z tablicy zostaną spełnione
  // REJECTED - zwraca odrzucony promis, jeśli którykolwiek z promisów w tablicy zostanie odrzucony

  const promises_all = [
    Promise.resolve('Resolved'),
    Promise.resolve('Resolved'),
    Promise.resolve('Rejected'),
    Promise.resolve('Resolved'),
  ];

  const allPromises = Promise.all(promises_all);

  allPromises
    .then(() => {
      console.log('all promises resolved');
    })
    .catch(() => {
      console.log('at least one promise is rejected');
    });

  // Promise.allSettled([new Promise(), new Promise()]) - przyjmuje tablicę promisów
  // Oczekuje na wykonanie WSZYSTKICH promisów w przekazanej tablicy promisów
  //        niezależnie od tego czy zostały spełnione czy odrzucone

  //FULFILLED - zwraca tablicę obiektów, z wartościami zwracanych wartości promisów

  const allSettledPromises = Promise.all(promises_all);
  allSettledPromises
    .then(() => {
      console.log('all promises finished');
    })
    .catch(() => {
      console.log('one of promises undone');
    });
  const anyPromises = [
    Promise.reject('rejected'),
    Promise.resolve('resolved'),
    Promise.reject('rejected'),
    Promise.resolve('resolved'),
  ];

  const promisesAny = Promise.any(anyPromises);
  promisesAny
    .then(() => {
      console.log('any promise resolved');
    })
    .catch(() => {
      console.log('all promises rejected');
    });

  //Promise race() example (it will return first resolved Promise - RACE!!)

  const promise1111 = new Promise((_, reject) =>
    setTimeout(() => reject('Promise 1'), 400)
  );
  const promise2222 = new Promise((resolve) =>
    setTimeout(() => resolve('Promise 2'), 500)
  );

  const promiseRace = Promise.race([promise1111, promise2222])
    .then((result) => {
      console.log('Promise.race pierwszy rozwiązany promise:', result);
    })
    .catch((result) => {
      console.log('Promise.race pierwszy rozwiązany niepowodzeniem:', result);
    });

  console.log('promiseRace:', promiseRace);

  return <div>Promises Methods</div>;
}
