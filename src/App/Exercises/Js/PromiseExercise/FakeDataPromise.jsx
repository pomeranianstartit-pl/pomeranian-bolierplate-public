import { useState } from 'react';

const TIME_SIMUL = 1000;

export function FakeDataPromise() {
  const [userData, setUserData] = useState(null);

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, TIME_SIMUL);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, TIME_SIMUL);
    });
  }

  function loadAllUserDAta() {
    loadUser()
      .then((result) => {
        console.log(result.id, 'tu jest id promise');
        return loadUserDetails(result.id);
      })
      .then((result) => {
        setUserData(result);
      });
  }

  function clickHandler() {
    setUserData(null);
    loadAllUserDAta();
  }

  return (
    <div>
      <p>Zadanie FakeDataPromise</p>
      <button onClick={clickHandler}>Załaduj Dane Użytkownika</button>
      {userData && (
        <ul>
          <li>id: {userData.id}</li>
          <li>age: {userData.age}</li>
          <li>country: {userData.country}</li>
        </ul>
      )}
    </div>
  );
}
