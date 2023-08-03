import './blog.css';

export const Blog = () => {
  return (
    <div className="blog">
      <article className="post">
        <div className="post-date">30-11-2022</div>
        <div className="post-title">
          <h1>Why are we so nostalgic for the 1990s?</h1>
        </div>
        <div className="post-context">
          <p>
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p>
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
          <div className="post-author">Radosława Majdan</div>
          <div className="post-author-profile">Senior Marketing Specialist</div>
        </div>
      </article>

      <article className="post">
        <div className="post-date">30-11-2022</div>
        <div className="post-title">
          <h1>I make mistakes!</h1>
        </div>
        <div className="post-context">
          <cite>
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </cite>
          <p id="cite-author">Marilyn Monroe</p>
          <div className="post-author">Radosława Majdan</div>
          <div className="post-author-profile">Senior Marketing Specialist</div>
        </div>
      </article>

      <article className="post">
        <div className="post-date">30-11-2022</div>
        <div className="post-title">
          <h1>18 Record-Breaking, Controversial, and Weird Facts </h1>
        </div>
        <div className="post-context">
          <p>
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>

          <ul className="capitalize-list">
            <li>WP.PL 1</li>
            <li>WP.PL 2</li>
            <li>ONET.PL</li>
          </ul>

          <div className="post-author">Radosława Majdan</div>
          <div className="post-author-profile">Senior Marketing Specialist</div>
        </div>
      </article>
    </div>
  );
};
