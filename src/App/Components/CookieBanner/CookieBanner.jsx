import React from 'react';
import { useState } from 'react';

import './styles.css';

export const CookieBanner = () => {
  function setCookies() {
    localStorage.setItem('Cookies', 1);
    // setCookies(getCookies());
  }

  // function getCookies() {

  //   const cookies = localStorage.getItem('Cookies');
  // }
  const [cookiesState, setCookiesState] = useState(false);
  function handleCookies() {
    setCookiesState(!cookiesState);
  }
  if (cookiesState) {
    return <></>;
  } else
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
