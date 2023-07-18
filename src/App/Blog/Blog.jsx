import './styles.css';

export const Blog = () => {
  return (
    <div className="blog-wrapper">
      <article className="blog-post">
        <p className="blog-post-date">30-11-2022</p>

        <h3 className="blog-post-title">
          Why are we so nostalgic for the 1990s?
        </h3>

        <p className="blog-post-content">
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
        </p>

        <p className="blog-post-content">
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>

        <p className="blog-post-author">Radosława Majdan</p>

        <p className="blog-post-author-title">Senior Marketing Specialist</p>
      </article>

      <article className="blog-post">
        <p className="blog-post-date">30-11-2022</p>

        <h3 className="blog-post-title">I make mistakes!</h3>

        <blockquote className="blog-post-quote">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </blockquote>

        <figcaption className="blog-post-quote-author">
          Marlin Monroe
        </figcaption>

        <p className="blog-post-author">Radosława Majdan</p>

        <p className="blog-post-author-title">Senior Marketing Specialist</p>
      </article>

      <article className="blog-post">
        <p className="blog-post-date">30-11-2022</p>

        <h3 className="blog-post-title">
          18 Record-Breaking, Controversial, and Weird Facts
        </h3>

        <p className="blog-post-content">
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>

        <ul className="blog-post-link-list">
          <li className="blog-post-link-list-item">
            <a href="https://wp.pl" target="_blank" rel="noopener noreferrer">
              WP.PL 1
            </a>
          </li>

          <li className="blog-post-link-list-item">
            <a href="https://wp.pl" target="_blank" rel="noopener noreferrer">
              WP.PL 2
            </a>
          </li>

          <li className="blog-post-link-list-item">
            <a href="https://onet.pl" target="_blank" rel="noopener noreferrer">
              ONET.PL
            </a>
          </li>
        </ul>

        <p className="blog-post-author">Radosława Majdan</p>

        <p className="blog-post-author-title">Senior Marketing Specialist</p>
      </article>
    </div>
  );
};
