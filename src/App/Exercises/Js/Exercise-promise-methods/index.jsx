import './styles.css';

export const ExercisePromiseMethods = () => {
  //Promise all example (all promises must be resolved without error)

  const promise1 = Promise.resolve(1);
  const promise2 = Promise.resolve(2);
  const promise3 = Promise.reject('Błąd');

  const promiseAll = Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('promiseAll Sukces:', results);
    })
    .catch((error) => {
      console.error(' promiseAll Błąd:', error);
    });

  console.log('promiseAll:', promiseAll);

  //Promise allSettled() example (some Promises might fail)

  const promise11 = Promise.resolve(1);
  const promise22 = Promise.reject('Błąd');

  const allSettled = Promise.allSettled([promise11, promise22]).then(
    (results) => {
      console.log('allSettled Wyniki:', results);
    }
  );

  console.log('allSettled:', allSettled);

  //Promise any() example (at least one should be resolved)

  const promise111 = Promise.reject('Błąd 1');
  const promise222 = Promise.reject('Błąd 2');
  const promise333 = Promise.resolve('Sukces');

  const promiseAny = Promise.any([promise111, promise222, promise333])
    .then((result) => {
      console.log('promiseAny Sukces:', result);
    })
    .catch((errors) => {
      console.error('promiseAny Błędy :', errors);
    });

  console.log('promiseAny:', promiseAny);

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

  return (
    <div className="container--promises-methods">
      Promises methods examples in browser console.
    </div>
  );
};
