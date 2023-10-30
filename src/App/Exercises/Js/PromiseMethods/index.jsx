export const PromiseMethods = () => {
  //Promise all example (all promises must be resolved without error)

  // const promise1 = Promise.resolve(1);
  // const promise2 = Promise.resolve(2);
  // const promise3 = Promise.reject('Błąd');

  // Promise.all([promise1, promise2, promise3])
  //   .then((results) => {
  //     console.log('Sukces:', results);
  //   })
  //   .catch((error) => {
  //     console.error('Błąd:', error);
  //   });

  //Promise allSettled() example (some Promises might fail)

  // const promise1 = Promise.resolve(1);
  // const promise2 = Promise.reject('Błąd');

  // Promise.allSettled([promise1, promise2])
  //   .then((results) => {
  //     console.log('Wyniki:', results);
  //   });

  //Promise any() example (at least one should be resolved)

  //   const promise1 = Promise.reject('Błąd 1');
  // const promise2 = Promise.reject('Błąd 2');
  // const promise3 = Promise.reject('1231');

  // Promise.any([promise1, promise2, promise3])
  //   .then((result) => {
  //     console.log('Sukces:', result);
  //   })
  //   .catch((errors) => {
  //     console.error('Błędy  sdad:', errors);
  //   });

  //Promise race() example (it will return first resolved Promise - RACE!!)

  // const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 400));
  // const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 500));

  // Promise.race([promise1, promise2])
  //   .then((result) => {
  //     console.log('Pierwszy rozwiązany promise:', result);
  //   });

  return <div></div>;
};
