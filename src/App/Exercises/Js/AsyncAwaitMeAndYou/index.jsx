import './styles.css';

// async function doSomethingAsync() {
//   // logic
// }

// const doSomethingAsyncArrowFunc = async () => {
//   // logic
// }

export function Exercise() {
  const greeting = new Promise((resolve, reject) => {
    resolve('Hello!');
  });

  const handleGreeting = () => {
    greeting
      .then((res) => {
        console.log('Gretting done:', res);
      })
      .catch((err) => {
        console.log('Gretting error:', err);
      })
      .finally(() => {
        console.log(
          'The Promise is settled, meaning it has been resolved or rejected.'
        );
      });
  };

  // async await
  const handleGreetingAsync = async () => {
    try {
      const res = await greeting;
      // ...
      console.log('Gretting from done:', res);
    } catch (err) {
      console.log('Gretting from error:', err);
    } finally {
      console.log(
        'The Promise from async/await is settled, meaning it has been resolved or rejected.'
      );
    }
  };

  // -------------------------- async await with return ------------------------------------

  // Finally, when returning a Promise inside an async function, you don’t need to use await. So the following is acceptable syntax.
  const getGreeting = async () => {
    return greeting;
  };

  // However, there’s one exception to this rule: you do need to write return await if you’re looking to handle
  // the Promise being rejected in a try...catch block.
  const getGreetingTryCatch = async () => {
    try {
      return await greeting;
    } catch (err) {
      console.log('Gretting from error:', err);
    } finally {
      console.log(
        'The Promise from async/await is settled, meaning it has been resolved or rejected.'
      );
    }
  };

  return (
    <div>
      <button onClick={handleGreeting}>Hello promise from then/catch</button>
      <button onClick={handleGreetingAsync}>
        Hello promise from async/await
      </button>
    </div>
  );
}