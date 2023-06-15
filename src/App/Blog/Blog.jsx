import './styles.css';

export const Blog = () => {
  return (
    <div class="blog">
      <div class="blog-post">
        <span class="blog-post-date">30-11.2022</span>
        <h2 class="blog-spot-title">Why are we so nostalgic?</h2>
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
        <div className="blog-post-author">Radosław Majdan</div>
        <br />
        Senior Product Manager
      </div>
    </div>
  );
};
