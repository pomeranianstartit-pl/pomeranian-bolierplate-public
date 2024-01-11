import './Blog.css';

import { Title } from './Title';
import { Signature } from './Signature';

export function Blog() {
  return (
    <div className="blog-whole-web">
      <div className="blog-whole-article">
        <div className="blog-data">30-11-2022</div>
        <Title title="Why are we so nostalgic for the 1990s?" />
        <article className="blog-content">
          <p className="blog-18px">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p className="blog-18px">
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </article>
        <Signature
          author="Radosława Majdan"
          signatureauthor="Senior Marketing Specialist"
        />
      </div>

      <div className="blog-whole-article">
        <div className="blog-data">30-11-2022</div>
        <Title title="I make mistakes!" />
        <article className="blog-content">
          <p className="blog-quote">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>
          <p className="blog-quote-author">Marilyn Monroe</p>
        </article>
        <Signature
          author="Radosława Majdan"
          signatureauthor="Senior Marketing Specialist"
        />
      </div>

      <div className="blog-whole-article">
        <div className="blog-data">30-11-2022</div>
        <Title title="18 Record-Breaking, Controversial, and Weird Facts" />
        <article className="blog-content">
          <p className="blog-18px">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>

          <ul className="blog-list-li">
            <li>
              <a href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a">
                WP.PL 1
              </a>
            </li>
            <li>
              <a href="https://www.wp.pl/">WP.PL 2</a>
            </li>
            <li>
              <a href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa">
                ONET.PL
              </a>
            </li>
          </ul>
        </article>
        <Signature
          author="Radosława Majdan"
          signatureauthor="Senior Marketing Specialist"
        />
      </div>
    </div>
  );
}
