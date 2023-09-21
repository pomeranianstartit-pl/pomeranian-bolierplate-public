import './styles.css';

export const Blog = () => {
  // BEM methodology

  return (
    <div className="container--blog">
      <article>
        <div>
          <data>20-11-2022</data>
        </div>

        <h1>Why are we so nostalgic for the 1990s?</h1>
        <section>
          <p>
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own. There's
            been the resurgence of vinyl as the trend-setters' choice of music
            consumption rather than the ease of a digital download, and now the
            hipsters have discovered the nostalgic sound of a whirring cassette
            from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
            Rick Astley.
          </p>
        </section>
        <p>Autor: Radosław Majdan</p>
        <p>Senior Marketing Specialist</p>
      </article>
    </div>
  );
};
