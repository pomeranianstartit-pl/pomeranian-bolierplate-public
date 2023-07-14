import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      <h1>&gt; BLOG</h1>
      <section className="blog-post" id="featured">
        <div className="blog-bell-icon">
          <svg
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
        </div>
        <div className="date">30-11-2022</div>
        <h2 className="blog-post-header">
          Why are we so nostalgic for the 1990s?
        </h2>
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
          Salt-N-Pepa to Rick Astley.
        </p>
        <div className="author">Radosław Majdan</div>
        <div className="position">Senior Marketing Specialist</div>
      </section>
      <section className="blog-post">
        <div className="date">30-11-2022</div>
        <h2 className="blog-post-header">I make mistakes!</h2>
        <p className="blog-post-quote">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </p>
        <p class="blog-post-signature">Marilyn Monroe</p>
        <div className="author">Radosław Majdan</div>
        <div className="position">Senior Marketing Specialist</div>
      </section>
      <section className="blog-post">
        <div className="date">30-11-2022</div>
        <h2 className="blog-post-header">
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
        <ul>
          <li>
            <a href="http://wp.pl">wp.pl 1</a>
          </li>
          <li>
            <a href="http://wp.pl">wp.pl 2</a>
          </li>
          <li>
            <a href="http://onet.pl">onet.pl</a>
          </li>
        </ul>
        <div className="author">Radosław Majdan</div>
        <div className="position">Senior Marketing Specialist</div>
        <div className="blog-post-cursor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="100"
            viewBox="0 0 98 100"
            fill="none"
          >
            <path
              d="M41.8653 39.793C40.0539 37.5708 40.387 34.3016 42.6092 32.4903C44.8314 30.6789 48.1006 31.012 49.9119 33.2342L52.0981 35.9164C50.2868 33.6942 50.6199 30.425 52.8421 28.6137C55.0643 26.8023 58.3335 27.1354 60.1448 29.3576L63.4242 33.3809L62.2633 31.9566C60.4519 29.7344 60.785 26.4652 63.0072 24.6539C65.2294 22.8426 68.4986 23.1756 70.3099 25.3978L81.309 38.892C90.3645 50.0017 88.6991 66.3501 77.5894 75.4056C72.0346 79.9334 65.1701 81.7809 58.5622 81.109L29.3885 74.7147C26.8203 74.1518 25.0836 71.7527 25.3488 69.137C25.6384 66.2938 28.1771 64.2245 31.0203 64.5141L41.3049 65.5619C44.5936 65.8969 46.6441 62.0894 44.5563 59.5278L39.283 53.0584L20.6997 30.2596C18.8884 28.0374 19.2214 24.7682 21.4436 22.9569C23.6658 21.1455 26.935 21.4786 28.7463 23.7008L44.0502 42.4762"
              fill="white"
            />
            <path
              d="M41.8653 39.793C40.0539 37.5708 40.387 34.3016 42.6092 32.4903C44.8314 30.6789 48.1006 31.012 49.9119 33.2342L52.0981 35.9164C50.2868 33.6942 50.6198 30.425 52.8421 28.6137C55.0643 26.8023 58.3335 27.1354 60.1448 29.3576L63.4242 33.3809L62.2633 31.9566C60.4519 29.7344 60.785 26.4652 63.0072 24.6539C65.2294 22.8426 68.4986 23.1756 70.3099 25.3978L81.309 38.892C90.3645 50.0017 88.6991 66.3501 77.5894 75.4056C72.0346 79.9334 65.1701 81.7809 58.5622 81.109L29.3885 74.7147C26.8203 74.1518 25.0836 71.7527 25.3488 69.137C25.6384 66.2938 28.1771 64.2245 31.0203 64.5141L41.3049 65.5619C44.5936 65.8969 46.6441 62.0894 44.5563 59.5278L39.283 53.0584L20.6997 30.2596C18.8884 28.0374 19.2214 24.7682 21.4436 22.9569C23.6658 21.1455 26.935 21.4786 28.7463 23.7008L44.0502 42.4762"
              stroke="#999999"
              stroke-width="3.46035"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};
