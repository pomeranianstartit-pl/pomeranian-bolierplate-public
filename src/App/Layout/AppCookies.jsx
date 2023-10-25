import { CalendarIcon } from '../Components/Icons/CalendarIcon';

import './styles/cookies.css';

 

export function AppCookies() {

  function setCookieState() {

    localStorage.setItem('cookieState', 1);

  }

  function getCookieState() {

    return localStorage.getItem('cookieState');

  }

//   if (!getCookieState()) { - odwrócenie wariantu przez dodanie "!"

  if (getCookieState()) {

    return null;

  }

 

  return (

    <div className="cookies">

      <div className="cookies-left">

        <CalendarIcon />

        <h4>Pozwól na pliki cookies</h4>

        <p>

          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne

          działanie strony i pomagają nam świadczyć usługi na najwyższym

          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych

          plików i przejść do strony lub dostosować użycie do swoich

          preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj

          zgody”, aby następnie wybrać te które odpowiadają Twoim indywidualnym

          preferencjom.

        </p>

      </div>

 

      <div className="cookies-right">

        <button onClick={setCookieState}>W porządku</button>

        <button>Dopasuj zgody</button>

      </div>

    </div>

  );

}

 