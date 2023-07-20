import { CookieIcon } from '../Icons/CookieIcon';
import './styles.css';
import React, { useState } from 'react';

export const CookieBanner = () => {
  const [overlay, setOverlay] = useState('overlay');

  function setCookieState() {
    setOverlay('');
    localStorage.setItem('cookieState', 1);
  }

  function getCookieState() {
    return localStorage.getItem('cookieState');
  }
  return (
    <>
      <div className={overlay}></div>
      <div className="cookieBanner">
        <div className="section-left">
          <CookieIcon />
          <h3 className="cookies-title">Pozwól na pliki cookies</h3>
          <p className="cookies-text">
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>
        <div className="section-right">
          <button onClick={setCookieState} className="btn-accept">
            W porządku
          </button>
          <button onClick={getCookieState} className="btn-adjust">
            Dopasuj zgody
          </button>
        </div>
      </div>
    </>
  );
};
