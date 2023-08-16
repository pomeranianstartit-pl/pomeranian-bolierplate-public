import { useState } from 'react';

export const LocalStorage = () => {
  // --------------------------------------
  // LOCAL STORAGE
  // --------------------------------------
  //    localStorage jest interfejsem w przeglądarkach, który umożliwia zapisywanie danych w przeglądarce użytkownika w postaci klucz-wartość.
  //    WAŻNE: Dane przechowywane w localStorage pozostają dostępne nawet po zamknięciu przeglądarki i ponownym uruchomieniu.

  //    Kiedy używamy:
  //    localStorage jest przydatne do przechowywania trwałych danych w przeglądarce, takich jak ustawienia użytkownika czy preferencje aplikacji.

  const [count, setCount] = useState(
    parseInt(localStorage.getItem('count')) || 0
  );

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount);
  };

  const reset = () => {
    setCount(0);
    localStorage.removeItem('count');
  };

  return (
    <div>
      <h1>Local Storage counter</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
