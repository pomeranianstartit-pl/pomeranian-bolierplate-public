import './styles.css';

export const Blog = () => {
  return (
    <div className="Blog">
      <h1 className="blog-name">&gt; Blog</h1>
      <div className="border">
        <div className="inside-border">
          <div className="date">14.07.2023</div>
          <h2 className="blog-post-header">
            Why are we so nostalgic for the 1990s?
          </h2>
          <p className="post">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
            <section className="post">
              There's been the resurgence of vinyl as the trend-setters' choice
              of music consumption rather than the ease of a digital download,
              and now the hipsters have discovered the nostalgic sound of a
              whirring cassette from which to enjoy the dulcet tones of everyone
              from Salt-N-Pepa to Rick Astley.
            </section>
          </p>
        </div>
        <div className="signature-border">
          <h3 className="signature">Radosława Majdan</h3>
          <p className="job-title">Senior Marketing Specialist</p>
        </div>
      </div>
      <div className="border">
        <div className="inside-border2">
          <div className="date">14.07.2023</div>
          <h2 className="blog-post-header">I make mistakes!</h2>
          <p className="post-quote">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.
            <section className="quoted">Marilyn Monroe</section>
          </p>
        </div>
        <div className="signature-border">
          <h3 className="signature">Radosława Majdan</h3>
          <p className="job-title">Senior Marketing Specialist</p>
        </div>
      </div>
      <div className="border">
        <div className="inside-border">
          <div className="date">14.07.2023</div>
          <h2 className="blog-post-header">
            18 Record-Breaking, Controversial, and Weird Facts{' '}
          </h2>
          <p className="post">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
        </div>
        <div className="list">
          <ul className="list">
            <li className="linki">
              <a href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a">
                WP.PL 1
              </a>
            </li>
            <li className="linki">
              {' '}
              <a href="https://www.wp.pl/">WP.PL 2</a>
            </li>
            <li>
              <a href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa">
                ONET.PL
              </a>
            </li>
          </ul>
        </div>
        <div className="signature-border-list">
          <h3 className="signature">Radosława Majdan</h3>
          <p className="job-title">Senior Marketing Specialist</p>
        </div>
      </div>
    </div>
  );
};
