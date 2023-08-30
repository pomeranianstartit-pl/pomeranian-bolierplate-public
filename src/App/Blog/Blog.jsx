import './styles.css';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { Title } from './Title/Title';
import { Author } from './Author/Author';
export const Blog = () => {
  return (
    <div>
      <h2 className="napisBlog">Blog</h2>
      <div className="div-blog-rev">
        <p className='data'>
          <span >30-11-2022</span>
        </p>
        <Title text="Tytuł A"/>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <Author autor="Adam Nowak" podpis="Senior It Specjalist" />
      </div>

      <div className="div-blog">
        <p><span>30-11-2022</span></p>
        <Title text="I make mistakes!" />
        <h1>I make mistakes!</h1>
        <p>
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best."
        </p>
        <h5>Merlin Monroe</h5>
        {/*dodajemy autora z komponentu a w nim przekazaną zmienną po kropce dodajemy użytą a stylke w tym wypadku zaimportują się w css z tego pliku a nie z komponentu,
        tak samo zachowuje się tytuł bo jest zrobiony w innym komponencie*/}
        <Author autor="Adam Nowak" podpis="Senior It Specjalist" />

        <h3 className="podpis">Radosław Majdan</h3>
        <p>Senior Marketing Specjalist</p>

      </div>

      <div className="div-blog">
        <p> <span> 30-11-2022 </span> </p>
        <h1>18 Record-Breaking, Controversial, and Weird Facts </h1>
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <ul className="classli">
          <li>
            <b>
              <a
                href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a"
                target="_blank"
                rel="noreferrer"
              >
                WP.PL 1
              </a>
            </b>
          </li>
          <li>
            <b>
              <a href="https://www.wp.pl/" target="_blank" rel="noreferrer">
                WP.PL 2
              </a>
            </b>
          </li>
          <li>
            <a
              href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa"
              target="_blank"
              rel="noreferrer"
            >
              ONET.PL
            </a>
          </li>
        </ul>
        <h3 className="podpis">Radosław Majdan</h3>
        <p>Senior Marketing Specjalist</p>
      </div>
    </div>
  );
};
