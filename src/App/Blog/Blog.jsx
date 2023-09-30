import './Blog.css';

import { Title } from './Title';
import { Author } from './Author';

export function Blog() {
  return (
    <div>
      <h1>BLOG</h1>
      <article className="post">
        <p className="blog-data">30-11-2022</p>
        <Title title="Why are we so nostalig for the 1990s?" />
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
          Salt-N-Pepa to Rick Astley
        </p>
        <Author
          author="Radosława Majdan"
          position="Sernior Marketing Specialist"
        />
      </article>

      <article className="post">
        <p className="blog-data">30-11-2022</p>

        <Title title="I make mistakes!" />
        <p>
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </p>
        <p className="blog-Marylin">Marilyn Monroe</p>
        <Author
          author="Radosława Majdan"
          position="Sernior Marketing Specialist"
        />
      </article>

      <article className="post">
        <p className="blog-data">30-11-2022</p>

        <Title title="18 Recor-Breaking, Controversial, and Weird Facts " />
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
      </article>
      <ul>
        <li>
          <a href="https://wp.pl">WP.PL 1 </a>
        </li>
        <li>
          <a href="https://wp.pl">WP.PL 2 </a>
        </li>
        <li>
          <a href="https://onet.pl">ONET.PL </a>
        </li>
      </ul>
      <Author
        author="Radosława Majdan"
        position="Sernior Marketing Specialist"
      />
    </div>
  );
}
