import './styles.css';

export function Booolean() {

  // --------------------------------------------------------------------
  // BOOLEAN
  // --------------------------------------------------------------------

  // const trueValue = true;
  // const falseValue = false;

  // Boolean wykorzystanie - WALIDACJA DANYCH
  function isEmailValid(email) {
    // Sprawdź czy email jest poprawny
    // jeżeli jest poprawny email to zwracamy true
    return true;
    // jeżeli nie jest poprawny email to zwracamy false
    // return false
  }

  if (isEmailValid('tes@example.com')) {
    console.log('email jest poprawny!');
  }

  // Boolean wykorzystanie - FLAGI STANÓW
  const isLoggedInUser = true;
  const isPremiumUser = false;

  // Boolean wykorzystanie - OBSŁUGA BŁĘDÓW
  const isError = false;

  // Boolean wykorzystanie - UKRYWANIE I WYŚWIETLANIE ELEMENTÓW

  // --------------------------------------------------------------------
  // BOOLEAN
  // --------------------------------------------------------------------
  let result5 = 5;
  result5 ||= 10;

  return (
    <div>
      <div>
        {isEmailValid('test@example.com') &&
          console.log('email jest poprawny!')}
      </div>
      {isLoggedInUser && <div>Użytkownik jest zalogowany!!</div>}
      {isPremiumUser && <div>Masz dostęp do części premium aplikacji!!</div>}
      {!isPremiumUser && <div>Wykup abonament, aby móc uzyskać dostęp</div>}
      {isError && (
        <div>Wystąpił błąd - popraw swój kod, załaduj stronę ponownie</div>
      )}
      <div>{`${result5}`}</div>
    </div>
  );
}
