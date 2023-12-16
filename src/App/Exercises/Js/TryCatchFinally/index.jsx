import { useState } from 'react';
import { useEffect } from 'react';

export const TryCatchFinally = () => {
  const [error, setError] = useState(null);

  const generateError = () => {
    throw new Error('Error from generateError function');
  };

  const simpleTryCatchExample = () => {
    try {
      //... code ...
      console.log('try first line');
      generateError();
      console.log('try last line');
    } catch (err) {
      // error handling
      console.log(err);
      console.log({ err }, 'err');
      setError(err.message);
    }
  };

  const syntaxErrorExample = () => {
    try {
      // noSuchVariable;
    } catch (err) {
      console.log('err', err);
    } finally {
      console.log('finally');
    }
  };

  const timeoutAsyncExample = () => {
    // Poniższy kod nie zadziała -> nie można używać try catch w przypadku asynchronicznych funkcji (bez użycia async await)
    // try {
    //   setTimeout(() => {
    //     noSuchVariable;
    //   }, 1000);
    // } catch {
    //   console.log('Potencjalny błąd!');
    // }
// ten kod zadziała


    setTimeout(() => {
      try {
        // noSuchVariable;
      } catch {
        console.log('Potencjalny błąd!');
      }
    }, 1000);
  };

  useEffect(() => {
    simpleTryCatchExample();
    syntaxErrorExample();
    timeoutAsyncExample();
  }, []);

  return (
    <div>
      Try Catch
      {error && <div>{error}</div>}
    </div>
  );
};