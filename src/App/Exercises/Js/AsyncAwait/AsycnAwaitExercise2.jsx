import { useState, useEffect } from 'react';

export const AsyncAwait2 = () => {
  const [data, setData] = useState();

  function loadUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject('Błąd pobrania');
        }
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      });
    });
  }

  // useEffect(() => {
  //   loadUser()
  //     .then((result) => [result, loadUserDetails(result.id)])
  //     .then(([result, userDetailsPromise]) =>
  //       userDetailsPromise.then((userDetails) =>
  //         setData({ ...result, ...userDetails })
  //       )
  //     )
  //     .catch((err) => console.log(`Przechwycony błąd: ${err}`));
  // }, []);

  useEffect(() => {
    const handleAsync = async () => {
      try {
        const result = await loadUser();
        const userDetails = await loadUserDetails(result.id);
        setData({ ...result, ...userDetails });
      } catch (error) {
        console.log(`przechwycony błąd: ${err} `);
      }
    };
    handleAsync();
  }, []);

  return (
    <div>
      <h1>AsyncAwaitExercise2</h1>
      <p>LoadUser: {JSON.stringify(data)}</p>
    </div>
  );
};
