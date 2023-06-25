import React from 'react';
import './styles.css';
import cookie from '../../Images/cookie.svg';

const Cookies = () => {
  const handleAgreement = () => {};
  const handleAgreementCustomization = () => {};

  return (
    <div className="cookies-agreement">
      <div className="text-wrapper">
        <img className="cookies-icon" src={cookie} alt="cookies icon" />
        <p>
          Pozwól na pliki cookies Nasza strona korzysta z ciasteczek, które
          umożliwiają poprawne działanie strony i pomagają nam świadczyć usługi
          na najwyższym poziomie. Możesz zaakceptować wykorzystanie przez nas
          wszystkich tych plików i przejść do strony lub dostosować użycie do
          swoich referencji. W tym celu kliknij przycisk po prawej stronie
          “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
          indywidualnym preferencjom.
        </p>
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
  );
};

export default Cookies;
