import { useState } from 'react';
export function Exercise() {
  //

  // BOOLEAN - operatory logiczne

  // true | false

  // const trueValue = true;

  // const falseValue = false;

  // 1. Wykorzystanie - WALIDACJA DANYCH

  function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

  // console.log(

  //   'PIERWSZY MAIL SPRAWDZAMY: test@wp.pl',

  //   isEmailValid('test@wp.pl')

  // );

  // console.log('PIERWSZY MAIL SPRAWDZAMY: testwp.pl', isEmailValid('testwp.pl'));

  const emailIsValid = isEmailValid('testwp.pl');

  //

  // 2. Wykorzystanie - FLAGI STANÓW

  //

  const [isLogged, setIsLogged] = useState(false);

  const [isPremiumUser, setIsPremiumUser] = useState(false);

  // const [isError, setIsError] = useState(false);

  const handleLog = () => {
    setIsLogged(!isLogged);
  };

  const handleSubscribe = () => {
    setIsPremiumUser(true);
  };

  return (
    <div>
      <div>{emailIsValid && 'Email jest poprawny'}</div>

      <div>
        {!emailIsValid && 'Wprowadziłeś błąd w adresie email! popraw go!'}
      </div>

      {isLogged && <button onClick={handleSubscribe}>Wykup subskrypcje</button>}

      {isLogged && <button onClick={handleLog}>Wyloguj się</button>}

      {!isLogged && <button onClick={handleLog}>Zaloguj się</button>}

      {isLogged && <div>content dla osoby zalogowanej....</div>}

      {isLogged && isPremiumUser && (
        <div>Dzisiaj mecze wygrają drużyny grające u siebie</div>
      )}
    </div>
  );
}
