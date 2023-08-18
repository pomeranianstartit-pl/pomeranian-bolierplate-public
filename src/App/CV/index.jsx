import './styles.css';
import '../Dashboard/styles/dashboard-about-me.css';
import { Link } from 'react-router-dom';
import { MyData } from '../Dashboard/MyData/MyData';
import { Skills } from './Skills/Skills';

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
          <div className="title-cv">Edukacja</div>
          <div className="table-parts-cv">
            <div className="education-cv">
              <div className="school-info-cv">
                <div className="university-cv">Uniwersytet Gdański</div>
                <div className="major-cv">
                  System Informacji Geograficznej - studia podyplomowe
                </div>
                <div className="time-study-cv">10.2019 - 04.2021</div>
              </div>
              <div className="studies-cv">
                <ul></ul>
              </div>
            </div>
            <div className="education-cv">
              <div className="school-info-cv">
                <div className="university-cv">Politechnika Gdańska</div>
                <div className="major-cv">
                  Gospodarka Przestrzenna (magister)
                </div>
                <div className="time-study-cv">02.2017 - 09.2018</div>
              </div>
              <div className="studies-cv">
                <ul></ul>
              </div>
            </div>
            <div className="education-cv">
              <div className="school-info-cv">
                <div className="university-cv">Politechnika Gdańska</div>
                <div className="major-cv">
                  Gospodarka Przestrzenna (licencjat)
                </div>
                <div className="time-study-cv">09.2013 - 01.2017</div>
              </div>
              <div className="studies-cv">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="info-cv">
          <hr></hr>
          <div className="title-cv">Doświadczenie</div>
          <div className="table-parts-cv">
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">
                  Pomorskie Biuro Planowania Regionalanego
                </div>
                <div className="job-position-cv">
                  Starszy Asystent w Zespole Osadnictwa i Dziedzictwa
                  Kulturowego
                </div>
                <div className="time-job-cv">11.2021 - obecnie</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>udział w pracach nad Audytem Krajobrazowym,</li>
                  <li>
                    {' '}
                    udział w projektach realizowanych w firmie, m.in. Pomorskie
                    Laboratorium Przestrzeni Publicznej
                  </li>
                  <li>
                    udział przy tworzeniu bazy danych przestrzennych –
                    aktualizacja i weryfikacja warstw w QGIS’ie przy
                    wykorzystaniu POSTGisa,
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
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">
                  Pomorskie Biuro Planowania Regionalanego
                </div>
                <div className="job-position-cv">Sekretarka</div>
                <div className="time-job-cv">06.2018 - 10.2021</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    koordynacja codziennych administracyjnych spraw biura –
                    organizacja spotkań, przygotowywanie i rozliczanie
                    delegacji, nadzór nad korespondencją przychodzącą i
                    wychodzącą,
                  </li>
                  <li>
                    organizacja wydarzeń biurowych, m.in. konferencji, spotkań z
                    partnerami zewnętrznymi i innymi jednostkami,
                  </li>
                  <li>
                    organizacja wydarzeń firmowych – wyjazdów integracyjnych
                    oraz spotkań wigilijnych,
                  </li>
                  <li>
                    organizacja{' '}
                    <i>Pomorskiej Akademii Planowania Przestrzeni Publicznej</i>{' '}
                    (interdyscyplinarnego projektu dla studentów trzech
                    gdańskich uczelni: Akademii Sztuk Pięknych, Politechniki
                    Gdańskiej oraz Uniwersytetu Gdańskiego) – pomoc w
                    przygotowaniu niezbędnych dokumentów (umów, regulaminu,
                    oświadczeń), kontakt z przedstawicielami uczelni, udział w
                    spotkaniach organizacyjnych, kontakt ze studentami,
                    zapewnienie zakwaterowania, transportu oraz ubezpieczenia w
                    ramach etapu wyjazdowego, udział w organizacji uroczystej
                    gali wieńczącej <i>Akademię</i>,
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
                    wsparcie merytoryczne przy realizacji określonych opracowań
                    i projektów,
                  </li>
                  <li>
                    <i>
                      Diagnoza stanu i koncepcja rozwoju turystyki wodnej w
                      województwie pomorskim 2030
                    </i>
                    - współautorka
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Hennes & Mauritz</div>
                <div className="job-position-cv">Kasjer-sprzedawca</div>
                <div className="time-job-cv">09.2017 - 06.2018</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>obsługa klientów sklepu,</li>
                  <li>dbanie o porządek na sklepie i uzupełnianie towaru,</li>
                  <li>odbieranie dostaw,</li>
                  <li>zachęcanie do korzystania z firmowej aplikacji,</li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Wystawa Klocków LEGO</div>
                <div className="job-position-cv">Obsługa wystawy</div>
                <div className="time-job-cv">03.2017 - 08.2017</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>sprawdzanie biletów,</li>
                  <li>
                    obsługa klientów w firmowym sklepie – sprzedaż produktów,
                    uzupełnianie towaru, odbiór dostaw,
                  </li>
                  <li>
                    obsługa gości w części kawiarnianej – przygotowywanie
                    napojów, sprzedaż artykułów spożywczych,
                  </li>
                  <li>utrzymywanie porządku na sali zabaw,</li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">PIKA Sp. z o.o.</div>
                <div className="job-position-cv">
                  Praca przy archiwizacji dokumentów
                </div>
                <div className="time-job-cv">03.2017 - 08.2017</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>skanowanie dokumentów,</li>
                  <li>obróbka skanów,</li>
                  <li>
                    wprowadzanie danych do systemu za pomocą dedykowanego
                    programu,
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Cliff Sport</div>
                <div className="job-position-cv">Kasjer-sprzedawca</div>
                <div className="time-job-cv">06.2015 - 07.2015</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>obsługa klientów sklepu,</li>
                  <li>dbanie o porządek na sklepie i uzupełnianie towaru,</li>
                  <li>odbieranie dostaw,</li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">SalesUp</div>
                <div className="job-position-cv">Hostessa</div>
                <div className="time-job-cv">09.2014</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    zachęcanie klientów jednego z hipermarketów do degustacji
                    oraz kupna czekoladek marki „Lindt”,
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Eu Consult</div>
                <div className="job-position-cv">Ankieterka</div>
                <div className="time-job-cv">07.2014 - 09.2014</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    praca w terenie – ankietowanie mieszkańców wskazanej
                    dzielnicy lub obszaru (konkretne adresy); celem ankiet było
                    rozpoznanie nastrojów mieszkańców co do realizacji
                    potencjalnej, nowej nitki sieci gazowej na danym obszarze i
                    ich ewentualnej chęci do partycypowania w kosztach przyłączy
                    do sieci; dodatkowo zbierane były informacje na temat
                    budynków, które miałyby zostać przyłączone (m.in. stan
                    budynku, ilość kondygnacji, dotychczasowy rodzaj ogrzewania
                    itp.),
                  </li>
                  <li>
                    stworzenie bazy „ankietowanych” adresów – przygotowanie
                    zestawienia zebranych informacji,
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Firmy RGIS oraz Invent</div>
                <div className="job-position-cv">Udział w inwentaryzacjach</div>
                <div className="time-job-cv">2013 / 2014</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    liczenie towaru zastanego na sklepie oraz w magazynie w
                    wybranych hipermarketach,
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">
                  Wojewódzki PPHU Lech Wojewódzki
                </div>
                <div className="job-position-cv">Pomoc przy produkcji</div>
                <div className="time-job-cv">07.2013 - 08.2013</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    pakowanie artykułów przemysłowych oraz artykułów
                    gospodarstwa domowego,
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-cv">
              <div className="job-info-cv">
                <div className="company-cv">Carrefour</div>
                <div className="job-position-cv">Pracownik tymczasowy</div>
                <div className="time-job-cv">08.2012</div>
              </div>
              <div className="duties-cv">
                <ul>
                  <li>
                    wykładanie towaru na półki zgodnie z odgórnymi wytycznymi,
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mydata-cv">
        <MyData />
        <Skills />
      </div>
    </div>
  );
};
