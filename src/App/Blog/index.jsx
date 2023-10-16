import './styles.css';

export const Blog = () => {
  //BEM methodology
  // <div className="container--blog">Blog</div>;

  return (
    <div>
      <section>
        <div className="conteiner1">
          <data>30-12-2022</data>
          <svg
            className="Ring"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M21.9043 27.7959C21.9043 30.2021 19.9355 32.1709 17.5293 32.1709C16.3335 32.1709 15.2251 31.6751 14.4376 30.8876C13.6501 30.1001 13.1543 28.9917 13.1543 27.7959"
              stroke="white"
              stroke-width="2.1875"
              stroke-miterlimit="10"
            />
            <path
              d="M17.5294 4.24371C12.7023 4.24371 8.77936 8.16663 8.77936 12.9937V17.2083C8.77936 18.0979 8.40019 19.4541 7.94811 20.2125L6.27102 22.9979C5.23561 24.7187 5.95019 26.6291 7.84602 27.2708C14.1314 29.3708 20.9127 29.3708 27.1981 27.2708C28.9627 26.6875 29.7356 24.602 28.7731 22.9979L27.096 20.2125C26.6585 19.4541 26.2794 18.0979 26.2794 17.2083V12.9937C26.2794 8.18121 22.3419 4.24371 17.5294 4.24371Z"
              stroke="white"
              stroke-width="2.1875"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M20.2269 4.66666C19.7748 4.53541 19.3081 4.43333 18.8269 4.375C17.4269 4.2 16.0852 4.30208 14.8311 4.66666C15.254 3.5875 16.304 2.82916 17.529 2.82916C18.754 2.82916 19.804 3.5875 20.2269 4.66666Z"
              stroke="white"
              stroke-width="2.1875"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="h1-top">Why are we so nostalgic for the 1990s?</h1>
          <p>
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          {''}
          <p>
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
          <h2>Radosław Majdan</h2>
          <p>Senior Marketing Specialist</p>
        </div>
      </section>
      <div className="conteiner">
        <section>
          <data>30-11-2022</data>
          <h1>I make mistakes!</h1>
          <p>
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>
          <span className="Monroe">Marilyn Monroe</span>
          <h2>Radosława Majdan</h2>
          <p>Senior Marketing Specjalist</p>
        </section>
      </div>
      <div className="conteiner">
        <section>
          <data>30-11-2022</data>
          <h1>18 Record-Breaking, Controversial, and Weird Facts </h1>
          <p>
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
          <div>
            <a href="https://wiadomosci.wp.pl/">WP.PL{''}1</a>
          </div>
          <div>
            <a href="https://wiadomosci.wp.pl/">WP.PL{''} 2</a>
          </div>
          <div>
            <a href="https://www.onet.pl/">ONET.PL</a>
          </div>
          <h2>Radosława Majdan</h2>
          <p>Senior Marketing Specjalist</p>
        </section>
      </div>
    </div>
  );
};
