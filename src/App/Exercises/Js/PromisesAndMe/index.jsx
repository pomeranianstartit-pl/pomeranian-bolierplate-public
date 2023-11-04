import { PromiseHandling } from './PromiseHandling';
import './styles.css';

export const PromisesAndMe = () => {
  const simplePromise = new Promise((resolve, reject) => {
    // Tutaj umieszczamy kod który może wykonać się asynchronicznie
    // Jeśli operacja zakończy się sukcesem - wywołujemy resolve (spełnij obietnicę)
    // Jeśli operacja zakończy się porażką/błędem - wywołujemy reject (odrzuć obietnicę)
    console.log('Promise started');

    const success = false;

    if (success) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  });

  // Stany promisów:
  // 1. pending - oczekujący - początkowy stan gdy promisy jest tworzony, ale jeszcze nie zostały
  //                           odrzucony ani spełniony
  // 2. fullfilled - spełniony - stan w którym promis został spełniony (wywołano resolve)
  // 3. rejected - odrzucony - stan w którym promis został odrzucony (wywołano reject)

  console.log('Promise created', simplePromise);

  //   const successPromise = Promise.resolve('Promise resolved');
  //   const errorPromise = Promise.reject('Promise resolved');

  //   console.log('successPromise', successPromise);
  //   console.log('errorPromise', errorPromise);
  return (
    <div>
      <h2>Promisy</h2>
      <div>
        <PromiseHandling />
      </div>
    </div>
  );
};
