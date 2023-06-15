import './styles.css';
import { Title } from './Title/Title';
import { Author } from './Author/Author';
export const Blog = () => {
  return (
    <div className="blog">
      <h3>BLOG</h3>
      <span class="blog-date">30-11-2022</span>
      <Title text="Tytuł A" />
      <div className="div1">
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
        </p>
        <p>
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>
        <p>
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>
        <br></br>
        <div className="blog-author-signature">
          <Author author="Radosława Majdan" />
          <Author authorposition="Senior Marketing Specialist" />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        <li>
          <a
            href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a"
            target="blank"
            className="blog-link"
          >
            WP.PL
          </a>
        </li>
        <br></br>
        <li>
          <a href="https://www.wp.pl" target="blank" className="blog-link">
            WP.PL
          </a>
        </li>
        <br></br>
        <li>
          <a
            href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa"
            target="blank"
            className="blog-link"
          >
            WP.PL
          </a>
        </li>
      </ul>
    </div>
  );
};
