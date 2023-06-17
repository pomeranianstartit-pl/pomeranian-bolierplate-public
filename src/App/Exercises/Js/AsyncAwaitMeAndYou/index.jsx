import './styles.css';

export function Exercise() {
  const greeting = new Promise((resolve, reject) => {
    resolve('Hello');
  });
  const handleGreeting = () => {
    greeting
      .then((res) => {
        console.log('greeting donr', res);
      })
      .catch((err) => {
        console.log('greeting error', err);
      })
      .finally(() => {
        console.log('has been resolved or rejected');
      });
  };

  //async await
  const handleGretingAsync = async () => {
    try {
      const res = await greeting;

      console.log('greeting from async done:', res);
    } catch (err) {
      console.log('error', err);
    } finally {
      console.log('resolve/reject');
    }
  };

  //finally, when returning a Promise inside an async func, you dont need to use await, ffolowing is acceptable syntax
  const getGreeting = async () => {
    return greeting;
  };

  return (
    <div>
      <button onClick={handleGreeting}></button>
    </div>
  );
}
