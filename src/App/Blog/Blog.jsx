import { Title } from './Title/Title';
import { PostSignature } from './PostSignature/PostSignature';

import './styles.css';

export const Blog = () => {
  return (
    <div class="blog">
      <div class="blog-post">
        <span class="blog-post-date">30-11.2022</span>
        <Title text="Why are we so nostalgic for the 1990s?" />
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.{' '}
          <p>
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </p>

        <PostSignature
          name="Zenek Martyniuk"
          role="Senior Marketing Specialist"
        />
      </div>
      <br />
      <br />
      <div class="blog-post">
        <span class="blog-post-date">30-11.2022</span>
        <Title text="I make mistakes!" />
        <p>
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </p>
        <PostSignature
          name="Zenek Martyniuk"
          role="Senior Marketing Specialist"
        />
        <h5>Marilyn Monroe</h5>
      </div>
      <br />
      <br />
      <div class="blog-post">
        <span class="blog-post-date">30-11.2022</span>
        <Title text="18 Record-Breaking, Controversial, and Weird Facts" />
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
            <a class="blog-link" href="https://www.wp.pl/">
              WP
            </a>
          </li>
          <li>
            <a class="blog-link" href="https://www.wp.pl/">
              WP 2
            </a>
          </li>
          <li>
            <a class="blog-link" href="www.onet.pl">
              ONET
            </a>
          </li>
        </ul>
        <PostSignature
          name="Zenek Martyniuk"
          role="Senior Marketing Specialist"
        />
      </div>
    </div>
  );
};
