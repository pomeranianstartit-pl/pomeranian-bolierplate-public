import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      <h3>BLOG</h3>
      <span class="blog-date">30-11-2022</span>
      <h2 class="blog-title">Why are we so nostalgic for the 1990s?</h2>
      <div className="div1">
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
        <br></br>
        <div className="blog-author-signature">
          <p className="blog-author">Radosława Majdan</p>
          <p className="blog-author-position">Senior Marketing Specialist/</p>
        </div>
      </div>
    </div>
  );
};
