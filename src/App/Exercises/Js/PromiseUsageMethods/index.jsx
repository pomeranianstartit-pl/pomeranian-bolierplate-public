import { useEffect } from 'react';

import './styles.css';

export function Exercise() {
  const promises = [
    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 1 setTimeout');

        resolve(1);
      }, 1000)
    ),

    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 2 setTimeout');

        resolve(2);
      }, 2000)
    ),

    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 3 setTimeout');

        resolve(3);
      }, 3000)
    ),
  ];

  useEffect(() => {
    // .all - when all resolved - all or nothing

    Promise.all(promises).then(alert);

    // dla await

    // const result = await Promise.all(promises)

    // ----------------------------------------------

    // .allSettled - when all resolved  - array of responses (in this case {results}) -> can be fullfiled or rejected

    Promise.allSettled(promises).then((results) => console.log(results));

    // dla await

    // const result = await Promise.allSettled(promises)

    // ----------------------------------------------

    // .race - first Promise resolved wins -> response from winner Promise - can be error

    Promise.race(promises).then(alert);

    // dla await

    // const result = await Promise.race(promises)

    // ----------------------------------------------

    // .any - first Promise resolved wins -> response from winner Promise - must be fullfilled

    Promise.any(promises).then(alert);

    // dla await

    // const result = await Promise.any(promises)
  }, []);

  return <div>Promise metody</div>;
}
