import './styles.css';
import { Cookie } from '../Icons/Cookie';
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
      <div className="cookiebanner_overlay">
        <div className="caly-cookies">
          <div className="tresc">
            <src>
              <Cookie />
            </src>
            <div>
              <h2 className="">Pozwól na pliki cookies</h2>
              <div class="tekst_i_guziki">
                <p className="text">
                  Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
                  działanie strony i pomagają nam świadczyć usługi na najwyższym
                  poziomie. Możesz zaakceptować wykorzystanie przez nas
                  wszystkich tych plików i przejść do strony lub dostosować
                  użycie do swoich preferencji. W tym celu kliknij przycisk po
                  prawej stronie “dopasuj zgody”, aby następnie wybrać te które
                  odpowiadają Twoim indywidualnym preferencjom.
                </p>
                <div className="guziki">
                  <button className="guzik1" onClick={hideBanner}>
                    W porządku
                  </button>
                  <button className="guzik2">Dopasuj zgody</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
