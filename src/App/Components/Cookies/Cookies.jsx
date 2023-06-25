import React, { useState } from 'react';
import './styles.css';
import cookies from '../../Images/cookie.svg';

const Cookies = () => {
  const [showCookies, setCookies] = useState(true);
  const [rejectCookies, setIsHidden] = useState(false);
  const handleAgreement = () => {
    setIsHidden(true);
    setTimeout(() => {
      setCookies(false);
    },1000);
  };
  const handleAgreementCustomization = () => {};

  return (
    <>
      {showCookies && (
        <div className={`cookies-agreements ${rejectCookies ? 'hidden' : ''}`}>
          <div className="text-cookie">
            <img src={cookies} alt="" />
            <div>
              <h3>Pozwól na pliki cookies </h3>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </div>
          </div>
          <div className="button-wrapper">
            <button className="agree" onClick={handleAgreement}>
              W porządku
            </button>
            <button
              className="customize"
              classonClick={handleAgreementCustomization}
            >
              Dopasuj zgody
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
