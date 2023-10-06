import './blog.css';

import { Title } from './Title';
import { Author } from './Author';

export function Blog() {
  return (
    <div>
      <article>
        <Title title="Why are we so nostalgic for the 1990s?" />
        <div className="blog-post-text">
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own."
        </div>
        <div className="blog-post-text">
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </div>
        <h2>Radosława Majdan</h2>
      </article>

      <article>
        <Title title="I make mistakes!" />
      </article>
      <article>
        <Title title="18 Record-Breaking, Controversial, and Weird Facts" />
      </article>
    </div>
  );
}
