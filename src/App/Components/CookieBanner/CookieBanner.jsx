import './styles.css';
import { CalendarIcon } from '../Icons/CalendarIcon.jsx';

const cookiesInLocalStorage = () => {
  console.log(!!localStorage, '!!localStorage');
  console.log(!localStorage, '!localStorage');

  if (localStorage.getItem('cookiesPermission') === 'true') return true;
  if (!!localStorage.getItem('cookiesPermission')) return false;
};

export const CookieBanner = () => {
  const handleCookiesPermision = () => {
    localStorage.setItem('cookiesPermission', true);
  };
  return (
    <>
      {!cookiesInLocalStorage() && (
        <div className="cookie_wrapper">
          {' '}
          <div className="cookie_content">
            {' '}
            <CalendarIcon className="content_icon" />{' '}
            <h4>Pozwól na pliki cookies</h4>{' '}
            <p>
              {' '}
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              preferencji. W tym celu kliknij przycisk po prawej stronie
              “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.{' '}
            </p>{' '}
          </div>{' '}
          <div className="cookie_permisions">
            {' '}
            <button
              onClick={handleCookiesPermision}
              className="permisions_accept"
            >
              W porządku
            </button>{' '}
            <button className="permisions_reject">Dopasuj zgody</button>{' '}
          </div>{' '}
        </div>
      )}
    </>
  );
};
