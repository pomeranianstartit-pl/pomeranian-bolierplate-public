import { PromiseHandling } from './PromiseHandling';

export function PromisesAndMe() {
  const simplePromise = new Promise((resolve, reject) => {
    //Tutaj umieszczamy kod ,który może wykonać się asynchronicznie.
    //Jeśli operacja zakończy się sukcesem - wywołujemy resolve (spełnij obietnicę)
    // Jeśli operacja zakończy się błędem wtedy wywołujemy rejecta (odrzuć obietnicę)
    console.log('Promise started');

    const success = false;

    if (success) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  });

  // Stany promisów:
  // 1. pending - oczekujący - początkowy stan gdy promise jest tworzony, ale jeszcze nie zostały
  // odrzucony ani spełniony.
  // 2. fulfilled - spełniony - stan w którym promis został spełniony ( wywołano resolve)
  // 3. rejected - odrzucony - stan , w którym promis został odrzucony (wywołano reject)

  console.log('Promise created', simplePromise);
  return (
    <div>
      {' '}
      <PromiseHandling />{' '}
    </div>
  );
}
