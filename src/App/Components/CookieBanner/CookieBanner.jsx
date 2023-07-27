import './styles.css';
import { CookieIcon } from '../Icons/CookieIcon';
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
    <div className="cookiecontainer">
      <h1>Pozwól na pliki cookies</h1>
      <div>
        <CookieIcon />
        Nasza strona korzysta z ciasteczek, które umożliwiają poprawne działanie
        strony i pomagają nam świadczyć usługi na najwyższym poziomie. Możesz
        zaakceptować wykorzystanie przez nas wszystkich tych plików i przejść do
        strony lub dostosować
      </div>
      <br></br>

      <div>
        użycie do swoich referencji. W tym celu kliknij przycisk po prawej
        stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
        indywidualnym preferencjom.
      </div>
      <button className="accept" onClick={setCookieState}>
        W porządku
      </button>
      <button className="adjustrights">Dopasuj zgody</button>
    </div>
  );
};
