import './Blog.css';

import { Title } from './Title';
import { Signature } from './Signature';

export function Blog() {
  return (
    <div className="blog-whole-web">
      <div className="blog-whole-article">
        <div className="blog-data">30-11-2022</div>
        <Title title="Why are we so nostalgic for the 1990s?" />
        <article className="blog-post">
          <p className="blog-post-text">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p className="blog-post-text">
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </article>
        <Signature
          author="Radosława Majdan"
          position="Senior Marketing Specialist"
        />
      </div>
    </div>
  );
}
