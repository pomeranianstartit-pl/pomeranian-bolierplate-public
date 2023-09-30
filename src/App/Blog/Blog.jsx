import './Blog.css';

import { Title } from './Title';
import { Author } from './Author';

export function Blog() {
  return (
    <div>
      <p className="data">30-11-2022</p>
      <article className="blog-post">
        <Title title="Why are we so nostalgic for the 1990s?" />
        <div className="blog-post-text">
          Why are we so nostalgic for the 1990s? Pop culture used to define a
          generation, but it seems the cultural, music and fashion trends of the
          1990s have been recycled, and what Generation X considered its rite of
          passage into adulthood, is being discovered and claimed by fledgling
          grown-ups as their own. There's been the resurgence of vinyl as the
          trend-setters' choice of music consumption rather than the ease of a
          digital download, and now the hipsters have discovered the nostalgic
          sound of a whirring cassette from which to enjoy the dulcet tones of
          everyone from Salt-N-Pepa to Rick Astley.
        </div>
      </article>
      <article className="blog-post">
        <Author author="Radosław Majdan" />
        <div className="blog-post-author-describe">
          Senior Marketing Specialist
        </div>
      </article>
      <p className="data">30-11-2022</p>
      <article className="blog-post">
        <Title title="I make mistakes!" />
        <div className="blog-post-text-italic">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </div>
        <p className="blog-Merlin">Marilyn Monroe</p>
      </article>
      <article className="blog-post">
        <Author author="Radosław Majdan" />
        <div className="blog-post-author-describe">
          Senior Marketing Specialist
        </div>
      </article>
      <p className="data">30-11-2022</p>
      <article className="blog-post">
        <Title title="18 Record-Breaking, Controversial, and Weird Facts" />
        <div className="blog-post-text">
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </div>
        <ul className="list">
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
      <article className="blog-post">
        <Author author="Radosław Majdan" />
        <div className="blog-post-author-describe">
          Senior Marketing Specialist
        </div>
      </article>
    </div>
  );
}
