import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      <a href="http://localhost:3000/blog">-Blog </a>
      <div className="blog-post-1">
        <p className="blog-post-data">30-11-2022</p>
        <h2 className="blog-post-title">
          Why are we so nostalgic for the 1990s?
        </h2>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
          <p>
            <br />
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </p>
        <br></br>
        <p>
          <strong>Radosława Majdan </strong>
          <br />
          Senior Marketing Specialist
        </p>
      </div>

      <div className="blog-post-2">
        <p className="blog-post-data">30-11-2022</p>
        <h2 className="blog-post-title">I make mistakes!</h2>
        <div className="blog-post-cytat">
          <blockquote>
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </blockquote>
          <figcaption>Marlin Monroe</figcaption>
          <br></br>
          <p>
            <strong>Radosława Majdan </strong>
            <br />
            Senior Marketing Specialist
          </p>
        </div>
      </div>

      <div className="blog-post-3">
        <p className="blog-post-data">30-11-2022</p>
        <h2 className="blog-post-title">
          18 Record-Breaking, Controversial, and Weird Facts{' '}
        </h2>
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <br></br>
        <ul className="blog-lista-linki">
          <li>
            <a href="https://wp.pl/">WP.PL 1</a>
          </li>
          <li>
            <a href="https://wp.pl/">WP.PL 2</a>
          </li>
          <li>
            <a href="https://onet.pl/">ONET.PL</a>
          </li>
        </ul>
        <br></br>
        <p>
          <strong>Radosława Majdan </strong>
          <br />
          Senior Marketing Specialist
        </p>
      </div>
    </div>
  );
};
