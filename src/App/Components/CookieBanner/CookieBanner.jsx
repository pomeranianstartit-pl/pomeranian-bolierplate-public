import './styles.css';
import Cookie from '../../Images/cookie.svg';
import { useState } from 'react';

export const CookieBanner = () => {
  const currentBannerState = localStorage.getItem('cookie-box'); // nie ma nic? 0 / false

  const [showBanner, setShowBanner] = useState(!currentBannerState);

  function hideBanner() {
    setShowBanner(0);
    localStorage.setItem('cookie-box', 1);
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-overlay">
      <div className="cookie-box">
        <div>
          <img className="cookie-img" src={Cookie} alt="cookie" />
          <h4>Pozwól na pliki cookies</h4>
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
        <div className="div-with-buttons">
          <button
            onClick={hideBanner}
            className="cookie-buttons button-primary"
          >
            W PORZĄDKU
          </button>
          <button onClick="" className="cookie-buttons button-secondary">
            DOSTOSUJ ZGODY
          </button>
        </div>
      </div>
    </div>
  );
};
