import { useEffect } from 'react';

export const AsyncAwait = () => {
  function doThingsPromise() {
    return Promise.resolve('Ok!');
  }

  async function doThingsAsync() {
    return 'Ok!';
  }

  const doThingsAsync2 = async () => {
    return 'Ok!';
  };

  // ----------------------------

  const loadUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'John', age: 28 });
      }, 500);
    });
  };

  const loadBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Clean Code', 'Refactoring']);
      }, 1000);
    });
  };

  const loadMovies = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Interstellar', 'Batman']);
      }, 2000);
    });
  };

  const loadAllData = async () => {
    const user = await loadUser();
    const books = await loadBooks();
    const movies = await loadMovies();

    return {
      user,
      books,
      movies,
    };
  };

  // ----------------------------

  const loadError = () => {
    return Promise.reject('Error!');
  };

  const loadErrorAsync = async () => {
    try {
      const data = await loadError();

      return data;
    } catch (error) {
      return error;
    }
  };

  // ----------------------------

  useEffect(() => {
    doThingsPromise().then((res) => console.log(res));
    doThingsAsync().then((res) => console.log(res));
    doThingsAsync2().then((res) => console.log(res));
    loadAllData().then((res) => console.log(res));
    loadErrorAsync()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>Async await</div>;
};
