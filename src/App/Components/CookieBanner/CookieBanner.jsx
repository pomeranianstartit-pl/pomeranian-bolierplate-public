import React from 'react';
import { useState } from 'react';

import './styles.css';

export const CookieBanner = () => {
  // pierwsza metoda bez wstawiania value

  // const [cookiesState, setCookiesState] = useState(false);
  // function handleCookies() {
  //   setCookiesState(!cookiesState);
  // }
  // if (cookiesState) {
  //   return <></>;
  // }
  // else

  // function getCookieState() {
  //   return localStorage.getItem('cookieState');
  // }

  // const [cookieState, setCookieState] = useState();

  // function handleCookies() {
  //   localStorage.setItem('cookieState', 1);
  //   setCookieState(getCookieState());
  // }

  // if (cookieState) {
  //   return <></>;
  // }

  function getCookies() {
    return localStorage.getItem('CookiesState');
  }
  const [cookiesState, setCookiesState] = useState();

  function handleCookies() {
    localStorage.setItem('CookiesState', 1);
    setCookiesState(getCookies());
  }
  if (cookiesState) {
    return <></>;
  }
  return (
    <div className="cookies-banner-container">
      <div className="cookies-banner">
        <div>
          <h5>Pozwól na pliki cookies</h5>
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować
          </p>
        </div>
        <button className="accept-cookies" onClick={handleCookies}>
          W porządku
        </button>
      </div>
    </div>
  );
};
