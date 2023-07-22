import './styles.css';
import cookieSvg from '../../Images/cookie.svg';
import { useState } from 'react';

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
    <div className="block-content-cookie">
      <div className="container-cookie-banner">
        <div className="cookie-text">
          <img src={cookieSvg} alt="Cookie" />
          <h3>Pozwól na pliki cookies</h3>
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>
        <button
          className="cookie-btn cookie-btn-okey"
          onClick={updateCookieState}
        >
          w porządku
        </button>
        <button
          className="cookie-btn cookie-btn-change"
          onClick={getCookieState}
        >
          dopasuj zgody
        </button>
      </div>
    </div>
  );
};
