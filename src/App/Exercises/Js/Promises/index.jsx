import { useEffect } from 'react';

export const Promises = () => {
  // -----------------------------------------------------------------------------
  // KOD SYNCHRONICZNY VS ASYNCHRONICZNY
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // KOD SYNCHRONICZNY
  // -----------------------------------------------------------------------------
  // kod wykonywany jest po kolei, linijka po linijce
  function test1() {
    console.log('test1');
    // ...
  }

  function test2() {
    console.log('test2');
  }

  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  test1();
  // test1 zakończy swoje działanie -> dopiero wtedy test2
  test2();

  // -----------------------------------------------------------------------------
  // KOD ASYNCHRONICZNY
  // -----------------------------------------------------------------------------
  // kod wykonywany jest nie po kolei -> oczekujemy na efekt który wykonuje się w tle

  // -----------------------------------------------------------------------------
  // RÓŻNICE
  // -----------------------------------------------------------------------------

  //    SEKWENCYJNOŚĆ WYKONYWANIA KODU
  // -----------------------------------------------------------------------------
  //      SYNCHRONICZNY:
  //        KOD WYKONUJE SIĘ W OKREŚLONEJ KOLEJNOŚCI
  //        KAŻDA LINIJKA KODU JEST PRZETWARZANA PRZED PRZEJŚCIEM DO KOLEJNEJ
  // -----------------------------------------------------------------------------
  //      ASYNCHRONICZNY:
  //        KOD POZWALA NA WYKONYWANIE OPERACJI W TLE, NA PRZYKŁAD OPERACJI SIECIOWYCH
  //        POBIERANIA PLIKÓW, KOMUNIKACJI Z SERWERM LUB INNYCH CZASŁOCHONNYCH/ZASOBOŻERNYCH OPERACJI
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  //    OBSŁUGA BŁĘDÓW
  // -----------------------------------------------------------------------------
  //      OBSŁUGA BŁĘDÓW W KODZIE SYNCHRONICZMY JEST STOSUNKOWO PROSTSZA DZIĘKI KONSTRUKCJI
  //      TRY/CATCH, KTÓRA POZWALA NA PRZECHWYCENIE WYJĄTKÓW

  // -----------------------------------------------------------------------------
  //    PRZEJRZYSTOŚĆ KODU
  // -----------------------------------------------------------------------------
  //      KOD SYNCHRONICZNY MOŻE BYĆ ŁATWIEJSZY DO ZROZUMIENIA, GDYŻ NIE WYMAGA MYŚLENIA
  //      O RÓWNOCZESNYM WYKONYWANIU KILKU OPERACJI W TLE

  // -----------------------------------------------------------------------------
  //    WYDAJNOŚĆ
  // -----------------------------------------------------------------------------
  //      KOD ASYNCHRONICZNY MOŻE BYĆ BARDZIEJ WYDAJNY, PONIEWAŻ POZWALA NA KONTYNUOWANIE
  //      DZIAŁANIA PROGRAMU W TRAKCIE WYKONYWANIA KOSZTOWNYCH OPERACJI W TLE

  // -----------------------------------------------------------------------------
  // PO CO JEST ASYNCHRONICZNOŚĆ?
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // ASYNCHRONICZNOŚĆ JEST ISTOTNA PONIEWAŻ UMOŻLIWIA RESPONSYWNOŚĆ INTERFEJSU UŻYTKOWNIKA.
  // DZIĘKI NIEJ APLIKACJA MOŻE WYKONYWAĆ OPERACJE W TLE
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PROGRAMOWANIE RÓWNOLEGŁE
  // ASYNCHRONICZNY KOD POZWALA NA PROGRAMOWANIE RÓWNOLEGŁE, CO JEST SZCZEGÓLNIE WAŻNE W ŚRODOWISKACH WIELOWĄTKOWYCH
  // I W APLIKACJACH KTÓRE WYMAGAJĄ EFEKTYWNEGO WYKORZYSTANIA ZASOBÓW (NP. GRY KOMPUTEROWE)
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // RACE CONDITION (PROBLEM WYŚCIGÓW)
  // W KODZIE ASYNCHRONICZNYM, GDZIE WIELE OPERACJI MOŻE BYĆ WYKONYWANYCH RÓWNOCZEŚNIE,
  // POJAWIA SIĘ PROBLEM RACE CONDITION, CZYLI SYTUACJA W KTÓREJ WYNIK ZALEŻY OD KOLEJNOŚCI ZAKOŃCZENIA
  // RÓŻNYCH OPERACJI - TO MOŻE PROWADZIĆ DO NIEOCZEKIWANYCH BŁĘDÓW
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PROMISES - OBIEKT REPREZENTUJĄCY WYNIK OPERACJI ASYNCHRONICZNEJ
  // -----------------------------------------------------------------------------

  const fetchData = () => {
    // Promise - obiekt reprezentujący wynik operacji asynchronicznej
    // zwracamy naszą obietnicę (Promise) -> fetchData jest funkcją asynchroniczną
    return new Promise((resolve, reject) => {
      // resolve -> funkcja która wywołuje się gdy operacja zakończy się sukcesem
      // reject -> funkcja która wywołuje się gdy operacja zakończy się błędem
      setTimeout(() => {
        const data = { id: 1, name: 'Jan', surname: 'Kowalski' };

        const err = data.length === 0 ? 'Brak danych' : null;

        // jeżeli wystąpi błąd -> odrzucamy obietnicę
        if (err) {
          reject(err);
        }

        // jeżeli wszystko ok -> rozwiązujemy obietnicę
        resolve(data);
      }, 1000);
    });
  };

  fetchData()
    .then((response) => {
      console.log('Dane pobrane: ', response);
    })
    .catch((error) => {
      console.error('Błąd: ', error);
    });

  // W powyższym przykładzie:
  //  new Promise((resolve, reject) => {...}): Tworzymy nowy obiekt Promise, który przyjmuje dwie funkcje zwrotne: resolve i reject.
  //  resolve jest wywoływane, gdy operacja asynchroniczna zakończy się sukcesem, przekazując wynik. reject jest wywoływane, gdy operacja zakończy się błędem, przekazując błąd.

  //  .then(response => {...}): To jest metoda wywoływana na obiekcie Promise, która jest uruchamiana, gdy operacja zakończy się sukcesem (wywołanie resolve).
  //  Przekazujemy funkcję zwrotną, która otrzymuje przekazany wynik.

  //  .catch(error => {...}): Jest to metoda wywoływana, gdy operacja zakończy się błędem (wywołanie reject).
  //  Przekazujemy funkcję zwrotną, która otrzymuje przekazany błąd.

  const resolvedPromise = Promise.resolve('Sukces!');
  const rejectedPromise = Promise.reject('Sukces!');

  resolvedPromise
    .then((response) => {
      console.log('Resolved: ', response);
    })
    .catch((error) => {
      console.log('Rejected: ', error);
    });

  rejectedPromise
    .then((response) => {
      console.log('Resolved: ', response);
    })
    .catch((error) => {
      console.log('Rejected: ', error);
    });

  // -----------------------------------------------------------------------------
  // PROMISES - STATES
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // 1. PENDING
  // -----------------------------------------------------------------------------
  //      Stan początkowy, w którym obietnica nie została jeszcze rozwiązana ani odrzucona.
  //      W tym stanie obietnica może zostać rozwiązana lub odrzucona.
  // -----------------------------------------------------------------------------
  // 2. FULFILLED
  // -----------------------------------------------------------------------------
  //      Stan, w którym obietnica została rozwiązana.
  //      W tym stanie obietnica nie może zostać rozwiązana ani odrzucona.
  // -----------------------------------------------------------------------------
  // 3. REJECTED
  // -----------------------------------------------------------------------------
  //      Stan, w którym obietnica została odrzucona.
  //      W tym stanie obietnica nie może zostać rozwiązana ani odrzucona.
  // -----------------------------------------------------------------------------

  useEffect(() => {
    const pendingPromise = new Promise((resolve, reject) => {});
    const fullfiledPromise = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve('Sukces');
      }, 1000);
    });

    const rejectedPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Błąd'));
      }, 2000);
    });

    console.log('pendingPromise: ', pendingPromise);
    console.log('rejectedPromise: ', rejectedPromise);
    console.log('fullfiledPromise: ', fullfiledPromise);

    fullfiledPromise
      .then((response) => {
        console.log('Response from Fullfiled: ', response);
      })
      .catch((error) => {
        console.log('Rejected from Fullfield: ', error);
      });

    rejectedPromise
      .then((response) => {
        console.log('Response from Rejected: ', response);
      })
      .catch((error) => {
        console.log('Rejected from Rejected: ', error);
      });

    console.log('pendingPromise: ', pendingPromise);
    console.log('rejectedPromise: ', rejectedPromise);
    console.log('fullfiledPromise: ', fullfiledPromise);
  }, []);
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PROMISES - CHAINING (ŁAŃCUCH PROMISÓW)
  // -----------------------------------------------------------------------------

  useEffect(() => {
    const fetchUserData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = { id: 1, name: 'Jan' };
          resolve(user);
        }, 1000);
      });
    };

    fetchUserData()
      .then((user) => {
        console.log('user | fetchUserData (1 then): ', user);
        return user.id;
      })
      .then((id) => {
        console.log('id | fetchUserData (2 then): ', id);
      })
      .catch((err) => {
        console.error('fetchUserData (1 catch):', 'Błąd:', err);
      })
      .finally(() => {
        console.log('Operacja zakończona');
      });
  }, []);

  return <div>{/* <UseEffectAndPromise /> */}</div>;
};
