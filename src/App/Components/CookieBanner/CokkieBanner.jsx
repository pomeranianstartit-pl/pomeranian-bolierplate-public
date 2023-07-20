import { CookieIcon } from '../Icons/CookieIcon';
import './styles.css';

export const CookieBanner = () => {
  return (
    <div>
      <div className="overlayCokkieBanner"></div>
      <div className="allCookie">
        <div className="cookieIcon">
          <CookieIcon />
        </div>
        <div className="secondCookieText">
          <div className="firstCookieText">Pozwól na pliki cookies</div>
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
        <div>
          <button className="firstCookieButton">W PORZĄDKU</button>
        </div>
        <div>
          <button className="secondCookieButton">DOPASUJ ZGODY</button>
        </div>
      </div>
    </div>
  );
};
