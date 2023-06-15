import { PostContent } from './PostContent/PostContent';
import { Signature } from './Signature/Signature';
import { Title } from './Title/Title';
import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-post">
        <p className="date">30-11-2022</p>
        <Title titleText="tytuł1" />
        <PostContent
          content=" Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley."
        />
        <Signature
          author="Radosława Majdan"
          occupation="Senior Marketing Specialist"
        />
      </div>

      <div className="blog-post">
        <p className="date">30-11-2022</p>
        <Title titleText="I make mistakes!" />
        <div className="quote">
          <PostContent
            content="
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”"
          />
        </div>

        <p className="quote-author">Marilyn Monroe</p>
        <Signature
          author="Radosława Majdan"
          occupation="Senior Marketing Specialist"
        />
      </div>

      <div className="blog-post">
        <p className="date">30-11-2022</p>
        <Title titleText="18 Record-Breaking, Controversial, and Weird Facts" />
        <PostContent
          content="The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals."
        />
        <ul>
          <li>
            <a
              className="post-link"
              href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a"
              target="blank"
            >
              WP.PL 1
            </a>
          </li>
          <li>
            <a className="post-link" href="https://www.wp.pl/" target="blank">
              WP.PL 2
            </a>
          </li>
          <li>
            <a
              className="post-link"
              href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa"
              target="blank"
            >
              ONET.PL
            </a>
          </li>
        </ul>
        <Signature
          author="Radosława Majdan"
          occupation="Senior Marketing Specialist"
        />
      </div>
    </div>
  );
};
