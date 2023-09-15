import { useState } from 'react';

import { CalendarIcon } from '../../../Components/Icons/CalendarIcon';

import './styles.css';

export const CookieBanner = () => {
  const [hideCookieBanner, setHideCookieBanner] = useState(
    !!localStorage.getItem('cookie')
  );

  const handleAccept = () => {
    localStorage.setItem('cookie', true);
    setHideCookieBanner(true);
  };

  return (
    <>
      {!hideCookieBanner && (
        <section className="cookie__wrapper">
          <div className="cookie__content">
            <CalendarIcon className="content__icon" />
            <h4>Pozwól na pliki cookies</h4>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
          <div className="cookie__permissions clearfix">
            <button className="permissions__accept" onClick={handleAccept}>
              W porządku
            </button>
            <button className="permissions__reject">Dopasuj zgody</button>
          </div>
        </section>
      )}
    </>
  );
};
