import { CookieIcon } from '../Components/Icons/CookieIcon';
import './styles/cookies.css';

export function AppCookies() {
  return (
    <div className="cookies">
      <div>
        <CookieIcon />

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

      <div>
        <button>W porządku</button>

        <button>Dopasuj zgody</button>
      </div>
    </div>
  );
}
