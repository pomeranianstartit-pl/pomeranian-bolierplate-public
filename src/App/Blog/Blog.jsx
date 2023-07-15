import './styles.css';

export const Blog = () => {
  return (
    <>
      <div class="original-tags">
        <h1>Tytuł</h1>

        <small>05.2023</small>

        <h3>
          H<sub>2</sub>O is good for you
        </h3>

        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>

        <h3>
          25<sup>th</sup> birthday
        </h3>

        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of <i>happy birthday</i>{' '}
          <q>quotes</q> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of{' '}
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>{' '}
          can stop you!
        </p>

        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>

        <p>
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>

          <ul>
            <li>Todo 1</li>

            <li>Todo 2</li>

            <li>Todo 3</li>
          </ul>
        </p>
      </div>
      <div className="main">
        <div className="date"> 30-11-2022</div>
        <h1 className="hBlog">Why are we so nostalgic for the 1990s?</h1>
        <section>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </section>

        <p className="name">Radosława Majdan</p>
        <p className="profession">Senior Marketing Specialist</p>

        <div className="date">30-11-2022</div>
        <h1 className="hBlog">I make mistakes!</h1>
        <p>
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can&rsquo;t
          handle me at my worst, then you sure as hell don’t deserve me at my
          best.”Marilyn Monroe
        </p>

        <p className="name">Radosława Majdan</p>
        <p className="profession">Senior Marketing Specialist</p>
        <div className="date"> 30-11-2022</div>
        <h1 className="hBlog">
          18 Record-Breaking, Controversial, and Weird Facts{' '}
        </h1>
        <section>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
          <ul>
            <li>
              <a href="https://www.wp.pl">wp.pl</a>
            </li>

            <li>
              <a href="https://www.wp.pl">onet.pl</a>
            </li>
          </ul>
        </section>
        <p className="name">Radosława Majdan</p>
        <p className="profession">Senior Marketing Specialist</p>
      </div>
    </>
  );
};
