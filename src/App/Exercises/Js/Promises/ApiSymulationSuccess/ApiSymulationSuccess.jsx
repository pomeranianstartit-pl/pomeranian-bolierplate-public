import { useState } from 'react';

export function ApiSymulationSuccess() {
  const [getUserData, setUserData] = useState('');

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }
  function loadUserDetails(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 2000);
    });
  }
  
  function loadAllUserData() {
    return loadUser().then((user) => {
      return loadUserDetails(user.id).then((userDetails) => {
        return { ...user, ...userDetails };
      });
    });
  }

  function handleLoadUserData() {
    setUserData(null);
    return loadAllUserData().then((allUserData) => {
      console.log('getUserData', getUserData);
      return setUserData(allUserData);
    });
  }

  return (
    <div className="playing-with-js-promises">
      <button onClick={handleLoadUserData}>
        Załaduj dane użytkownika - {getUserData?.country}
      </button>
      <p>{getUserData?.id}</p>
      <p>{getUserData?.name}</p>
      <p>{getUserData?.age}</p>
    </div>
  );
}