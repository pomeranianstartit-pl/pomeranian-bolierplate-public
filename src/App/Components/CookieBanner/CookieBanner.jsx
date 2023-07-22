import { useState } from 'react';
import './styles.css';

export const CookieBanner = () => {
  function getCookieState() {
    return localStorage.getItem('cookieState');
  }

  const [cookieState, setCookieState] = useState(getCookieState());

  function updateCookieState() {
    localStorage.setItem('cookieState', 1);
    setCookieState(getCookieState());
  }

  if (cookieState) {
    return <></>;
  }
  return (
    <div className="banner">
      <div className="header">
        <h3>Pozwól na pliki cookies</h3>
      </div>
      <div className="cookie" src="../../Images/cookie.svg"></div>
      <div className="paragraf1">
        <p>
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować
        </p>
      </div>
      <div className="paragraf2">
        <p>
          użycie do swoich preferencji. W tym celu kliknij przycisk po prawej
          stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
          Twoim indywidualnym preferencjom.
        </p>
      </div>
      <button className="accept-cookies" onClick={updateCookieState}>
        W porządku
      </button>
      <div className="button2">DOPASUJ ZGODY</div>
    </div>
  );
};
