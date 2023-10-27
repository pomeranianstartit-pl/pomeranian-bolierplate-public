import React, { useState } from 'react';

// imitacja tabelki z dodatkowymi danymi
const userDetailsData = [
  {
    id: 1,
    age: 30,
    country: 'Poland',
  },
  {
    id: 2,
    age: 20,
    country: 'Poland',
  },
];

// imitacja tabelki z podstawowymi danymi
const userList = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Kamila Doe',
  },
];

// baza wyglądałaby tak:
const db = {
  userList: userList,
  userDetailsData: userDetailsData,
};

// imitacja pobrania danych z bazy danych - tabelki z podstawowymi danymi
function loadUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userToFind = userList.find((user) => user.id === id);

      resolve(userToFind);
    }, 2000);
  });
}

// imitacja pobrania danych z bazy danych - tabelki z dodatkowymi danymi
function loadUserDetails(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userDetailsToFind = userDetailsData.find(
        (userDetails) => userDetails.id === userId
      );

      resolve({ id: userId, ...userDetailsToFind });
    }, 2000);
  });
}

export const PromiseApi = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const loadAllUserData = () => {
    setUser(null);
    setUserDetails(null);

    loadUser(2)
      .then((user) => {
        setUser(user);

        return loadUserDetails(user.id);
      })
      .then((userDetails) => {
        setUserDetails(userDetails);
      })
      .catch();
  };

  return (
    <div>
      <h1>Dane o użytkowniku</h1>
      <button onClick={loadAllUserData}>Załaduj dane użytkownika...</button>
      <div>
        {user && (
          <div>
            Imię użytkownika: <strong>{user.name}</strong>
          </div>
        )}

        {userDetails && (
          <div>
            Dane o użytkowniku: Wiek: <strong>{userDetails.age}</strong>
            Kraj: <strong>{userDetails.country}</strong>
          </div>
        )}
      </div>
    </div>
  );
};
