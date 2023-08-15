import './styles.css';
import '../Dashboard/styles/dashboard-about-me.css';
import { Link } from 'react-router-dom';
import { MyData } from '../Dashboard/MyData/MyData';

export const CV = () => {
  return (
    <div className="dashboard-cv">
      <div className="main-container-cv">
        <div className="page-path">
          <Link to="/dashboard">Strona główna</Link>
          <p>&nbsp;&gt;&nbsp;Moje CV</p>
        </div>
        <h1>Moje CV</h1>
        <p className="intro-cv">
          Poniżej znajdziesz wszystkie najważniejsze informacje na temat mojego
          wykształcenia, doświadczenia oraz posiadanych umiejętności.
        </p>
        <div className="info-cv">
          <div className="experience-cv">
            <div className="title-cv">Doświadczenie</div>
            <div className="job-info-cv">
              <div className="company-cv">
                Pomorskie Biuro Planowania Regionalanego
              </div>
              <div className="job-position-cv">
                Starszy Asystent w Zespole Osadnictwa i Dziedzictwa Kulturowego
              </div>
              <div className="time-job-cv">2021-obecnie</div>
            </div>
            <div className="duties-cv">
              <ul>
                <li>
                  udział w pracach nad Audytem Krajobrazowym, o udział w
                  projektach realizowanych w firmie, m.in. Pomorskie
                  Laboratorium Przestrzeni Publicznej
                </li>
                <li>
                  o udział przy tworzeniu bazy danych przestrzennych –
                  aktualizacja i weryfikacja warstw w QGIS’ie przy wykorzystaniu
                  POSTGisa,
                </li>
                <li>
                  przygotowywanie map gmin województwa pomorskiego na potrzeby
                  Dialogu Terytorialnego, o kontakt z innymi jednostkami
                  samorządu województwa pomorskiego, wykonawcami, uczelniami
                  itp.
                </li>
                <li>
                  pomoc w przygotowywaniu i koordynowaniu postepowań
                  przetargowych,
                </li>
                <li>
                  obsługa strony internetowej Biura – dodawanie wpisów,
                  aktualizacja informacji, uzupełnianie bazy o grafiki i
                  zdjęcia,
                </li>
                <li>
                  pełnienie funkcji przewodniczącej Zakładowego Funduszu
                  Świadczeń Socjalnych (w tym koordynacja kart Multisport),
                </li>
                <li>
                  przygotowanie wystawy na potrzeby konferencji z okazji
                  Międzynarodowego Dnia Krajobrazu – dobór odpowiednich zdjęć,
                  zaprojektowanie plansz wystawowych oraz ich wyplotowanie,
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mydata-cv">
        <MyData />
      </div>
    </div>
  );
};
