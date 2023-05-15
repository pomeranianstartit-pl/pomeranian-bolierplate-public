import React, { useState } from 'react';
import './styles.css';
import { CookieIcon } from './CookieIcon';

export function CookiesBanner() {
  const [CookieBannerHidden, setCookieBannerHidden] = useState(false);

  function SetCookiesInfo() {
    localStorage.setItem('CookieState', 1);
    setCookieBannerHidden(true);
  }

  function checkCookieData() {
    return localStorage.getItem('CookieState');
  }
  if (checkCookieData()) {
    setCookieBannerHidden(true);
  }
  return (
    <div
      className={
        CookieBannerHidden ? 'cookie-banner cookie-hidden' : 'cookie-banner'
      }
    >
      <div className="cookie-banner-content">
        <CookieIcon className="cookie-image" />
        <div>
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
        <div className="cookie-banner-actions">
          <button className="action-button button-red" onClick={SetCookiesInfo}>
            W PORZĄDKU
          </button>
          <button className="action-button button-white">DOPASUJ ZGODY</button>
        </div>
      </div>
    </div>
  );
}
