import { useState } from 'react';

export const Exercise = () => {
  const [user, setUser] = useState({
    id: '',
    age: '',
    country: '',
  });
  const [error, setError] = useState(null);

  function loadUser() {
    console.log('loadUser running..');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ id: 1, name: 'John Doe' });
        } else {
          reject('Błąd server: nieudane wyszukanie dla userId: 1');
        }
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      console.log('loadUserDetails running..');
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
        // reject('Something went wrong');
      }, 2000);
    });
  }

  function loadAllUserData() {
    loadUser()
      .then((response) => {
        console.log(response);
        return response.id;
      })
      .then((id) => {
        console.log(id);
        return loadUserDetails(id);
      })
      .then((data) => {
        console.log(data);
        setError(null);
        setUser(data);
      })
      .catch((error) => {
        console.warn(error);
        setError(error);
      });
  }
  // async function loadAllUserData() {
  //   try {
  //   const user = await loadUser();
  //  const userDetails = await loadUserDetails(user.id);
  //  setError(null);
  //  setUser(userDetails);
  //  } catch (error) {
  //    setError(error);
  // } finally {
  //   console.log('Load user details finished.');
  //  }
  //}
  return (
    <div>
      <h1>User details</h1>
      {error && <p>Error: {error}</p>}
      {!error && (
        <div>
          <p>Id: {user.id}</p>
          <p>Age: {user.age}</p>
          <p>Country: {user.country}</p>
        </div>
      )}

      <button onClick={() => loadAllUserData()}>Load user details</button>
    </div>
  );
};
