import { RoundedImage } from '../../../Components/RoundedImage/RoundedImage';
import './style.css';

export function ImageFiles() {
  return (
    <div className="images-files">
      <h2>Właściwości dotyczące zdjęć</h2>
      <p>
        Zdjęcie umieszczane na stronie za pomocą taga 'img' gdzie jego
        atrybutami są src='źródło zdjęcia', alt='opis co zdjęcie przestawia'.{' '}
      </p>
      <ul>
        Główne właściwości dotyczące zdjęć
        <li>'background-image:url()'-ustawia zdjęcie jako tło strony</li>
        <li>'max-width'- ustawia maksymalną szerokość zdjęcia</li>
        <li>
          'background-position'-ustawia pozycje zdjęcia, np. 'center' wycentruje
          zdjęcie
        </li>
        <li>
          'background-size:contain'-dopasuje zdjęcie aby mieściło się na
          stronie(duplikuje zdjęcia jeżeli trzeba)
        </li>
        <li>
          'background-repeat'- właściwość ustawiająca powtarzalność zdjęcia lub
          nie.{' '}
        </li>
      </ul>
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt=""
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" />

      <RoundedImage
        src="https://www.svgrepo.com/show/85124/cat.svg"
        size={{
          width: '100px',
          height: 100,
        }}
      />
    </div>
  );
}
