import { useState } from 'react';

export const SessionStorage = () => {
  // --------------------------------------
  // SESSION STORAGE
  // --------------------------------------
  //    sessionStorage jest interfejsem w przeglądarkach, który umożliwia zapisywanie danych w przeglądarce użytkownika w postaci klucz-wartość.
  //    WAŻNE: Dane przechowywane w sessionStorage dane są dostępne do przechowywania w trakcie jednej sesji przeglądarki.

  //    Kiedy używamy:
  //    sessionStorage jest przydatne do przechowywania danych wrażliwych w przeglądarce dla danej sesji,
  //    takich jak dane logowania użytkownika, które nie powinny być dostępne dla innych sesji przeglądarki.

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem('user')) || {}
  );
  const saveUserData = () => {
    const user = {
      name: 'Jan',
      age: 30,
    };
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <h1>Session Storage counter</h1>
      <div>
        {/* <p>Name: {user && user.name}</p> */}
        <p>Name: {user?.name}</p>

        {/* <p>Name: {user && user.age}</p> */}
        <p>Age: {user?.age}</p>
        <button onClick={saveUserData}>Save user data</button>
      </div>
    </div>
  );
};
