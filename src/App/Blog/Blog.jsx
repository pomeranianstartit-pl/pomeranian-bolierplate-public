import { Author } from './Author';
import { Title } from './Title';

import './Blog.css';

export const Blog = () => {
  return (
    <div>
      <article className="blog-post">
        <time>30-11-2022</time>

        <Title title="Why are we so nostalgic for the 1990s?" />

        <div className="blog-post-text">
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
        </div>

        <Author
          author={'Radosława Majdan'}
          authorDescription={'Senior Marketing Specialist'}
        />
      </article>
    </div>
  );
};
