import { useEffect, useState } from 'react';

export const Exercise = () => {
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
      // noSuchVariable; dodany komentarz przeze mnie
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

    setTimeout(() => {
      try {
        // noSuchVariable; dodany komentarz przeze mnie
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
