import React from 'react';
import './styles.css';
import cookie from '../../Images/cookie.svg';
import { useState } from 'react';

const Cookies = () => {
  const [agree, setAgree] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const handleAgreement = () => {
    setIsHidden(true);
    setTimeout(() => {
      setAgree(false);
    }, 1000);
  };
  const handleAgreementCustomization = () => {};

  return (
    <>
      <div className={`cookies-agreements ${isHidden ? 'hidden' : ''}`}>
        <div className="text-wrapper">
          <img src={cookie} alt="cookies icon" />
          <div>
            <h3>Pozwól na pliki cookies</h3> Nasza strona korzysta z ciasteczek,
            które umożliwiają poprawne działanie strony i pomagają nam świadczyć
            usługi na najwyższym poziomie. Możesz zaakceptować wykorzystanie
            przez nas wszystkich tych plików i przejść do strony lub dostosować
            użycie do swoich referencji. W tym celu kliknij przycisk po prawej
            stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
            Twoim indywidualnym preferencjom.
          </div>
        </div>
        <div className="button-wrapper">
          <button className="agree" onClick={handleAgreement}>
            w porządku
          </button>
          <button className="customize" onClick={handleAgreementCustomization}>
            Dopasuj zgody
          </button>
        </div>
      </div>
      )
    </>
  );
};

export default Cookies;
