import './styles.css';

import { CookieIcon } from '../Icons/CookieIcon';

import { useState } from 'react';

function setCookieState() {
  localStorage.setItem('cookieState', 1);
}

function getCookieState() {
  return localStorage.getItem('cookieState');
}

export const CookieBanner = () => {
  const currentBannerState = getCookieState();

  const [showBanner, setShowBanner] = useState(!currentBannerState);

  function hideBanner() {
    setShowBanner(0);

    setCookieState();
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div>
      <div className="cookiebanner_overlay"></div>
      <div className="cookie_banner">
        <div className="cookie-icon"></div>
        <CookieIcon />
        <div className="cookies">Pozwól na pliki cookies </div>

        <div className="teks_1">
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować
        </div>

        <div className="tekst_2">
          użycie do swoich preferencji. W tym celu kliknij przycisk po prawej
          stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
          Twoim indywidualnym preferencjom.
        </div>

        <div>
          <button onClick={hideBanner} className="first">
            W Porządku
          </button>

          <button className="second">Dopasuj Zgody</button>
        </div>
      </div>
    </div>
  );
};
