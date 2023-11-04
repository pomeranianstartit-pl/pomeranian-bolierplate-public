import { useState } from 'react';
import { ApiSimulation } from './apiSimulation';

const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe' });
    }, 2000);
  });
};

const loadUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, age: 30, country: 'Poland' });
    }, 2000);
  });
};

export const FakeDataPromise = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const loadAllUserData = () => {
    loadUser()
      .then((userData) => {
        setUser(userData);
        return loadUserDetails(userData.id);
      })
      .then((userDetails) => {
        setUserDetails(userDetails);
      });
  };

  const handleLoadData = () => loadAllUserData();

  return (
    <div>
      <button onClick={handleLoadData}>Załaduj detail użytkownika</button>
      {user && userDetails && (
        <div>
          <div>{userDetails.id}</div>
          <div>{user.name}</div>
          <div>{userDetails.age}</div>
          <div>{userDetails.country}</div>
        </div>
      )}
      <div>
        <ApiSimulation />
      </div>
    </div>
  );
};
