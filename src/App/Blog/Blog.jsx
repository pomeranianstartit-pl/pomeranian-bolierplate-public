import { Author } from './Author/Author';
import { Title } from './Title/Title';
import './styles.css';

export const Blog = () => {
  return (
    <div class="blog">
      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <Title text="Tytuł A" />
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
          <br />
          <br />
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>
        <Author name="Radosław Majdan" title="Senior Marketing Specialist" />
      </div>
      <br />
      <br />

      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <Title text="Tytuł B" />
        {/* <h2 class="blog-post-title">I make mistakes!</h2> */}
        <p className="quote">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </p>
        <div className="author">Marilyn Monroe</div>
        <Author name="Radosław Majdan" title="Senior Marketing Specialist" />
      </div>
      <br />
      <br />

      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <Title text="Tytuł C" />
        {/* <h2 class="blog-post-title">
          18 Record-Breaking, Controversial, and Weird Facts{' '}
        </h2> */}
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <p>
          My links
          <ul>
            <li>
              <a class="blog-link" href="http://wp.pl">
                wp.pl 1
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://wp.pl">
                wp.pl 2
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://onet.pl">
                onet.pl
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://onet123.pl">
                onet123.pl
              </a>
            </li>
          </ul>
        </p>

        <Author name="Radosław Majdan" title="Senior Marketing Specialist" />
      </div>
    </div>
  );
};
