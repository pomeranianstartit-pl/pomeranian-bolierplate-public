export const CookieStorage = () => {
  // --------------------------------------
  // COOKIES
  // --------------------------------------

  //    Cookies to małe fragmenty danych przechowywane w przeglądarce użytkownika.
  //    Mają określony czas życia, po którym są automatycznie usuwane.
  //    Mają ograniczoną pamięć (4kb)
  //    Są przechowywane w formacie klucz-wartość
  //    Są przechowywane w formacie tekstowym
  //    Są wysyłane wraz z każdym zapytaniem do serwera

  //   Kiedy używamy
  //   - do przechowywania informacji o użytkowniku
  //   - do przechowywania ustawień
  //   - do śledzenia użytkownika
  //   - do śledzenia sesji użytkownika

  const setCookie = () => {
    // WAŻNE - jeden klucz przy zapisie do cookiesów może mieć tylko jedną wartość
    // (jeśli chcemy dać następny klucz, musimy drugi raz wywołać przypisanie)
    document.cookie = "username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC'";
    document.cookie = "surname=John; expires=Thu, 18 Dec 2023 12:00:00 UTC'";
  };
  const getCookie = () => {
    const cookies = document.cookie.split('; ');
    const cookieObject = {};

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieObject[name] = value;
    }

    console.log(cookieObject, 'cookieObject');
  };

  return (
    <div>
      <h1>Cookie Storage</h1>
      <div>
        <button onClick={setCookie}>Set cookie</button>
        <button onClick={getCookie}>Get cookie</button>
      </div>
    </div>
  );
};
