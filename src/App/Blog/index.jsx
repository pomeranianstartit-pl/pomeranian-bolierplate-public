import { useState } from 'react';
import { RingIcon } from '../Components/Icons/RingIcon';
import { Signature } from './Signature';
import './styles.css';

export function Blog() {
  const [ring, setRing] = useState(false);

  function handleOnClick() {
    setRing(!ring);
  }
  const selectedRing = ring ? '' : 'article-active';

  return (
    <div>
      <article className={selectedRing}>
        <div className="article">
          {' '}
          <time className="time" datetime="2022-11-30T12:00:00">
            30-11-2022
          </time>
          <div className="ringIcon" onClick={handleOnClick}>
            {' '}
            <RingIcon></RingIcon>
          </div>
        </div>
        <h2>Why are we so nostalgic for the 1990s?</h2>
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
        <Signature />
      </article>
      <article className={selectedRing}>
        <time className="time" datetime="2022-11-30T12:00:00">
          30-11-2022
        </time>
        <div className="ringIcon" onClick={handleOnClick}>
          {' '}
          <RingIcon className={selectedRing}></RingIcon>
        </div>
        <h2>I make mistakes!</h2>
        <q>
          <i>
            I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.
          </i>
        </q>
        <p>Marilyn Monroe</p>

        <Signature />
      </article>
      <article className={selectedRing}>
        <time className="time" datetime="2022-11-30T12:00:00">
          30-11-2022
        </time>
        <div className="ringIcon" onClick={handleOnClick}>
          {' '}
          <RingIcon className={selectedRing}></RingIcon>
        </div>
        <h2>18 Record-Breaking, Controversial, and Weird Facts </h2>
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
            <b>
              <a href="www.wp.pl">WP.PL 1</a>
            </b>
          </li>
          <li>
            <b>
              <a href="www.wp.pl">WP.PL 2</a>
            </b>
          </li>
          <li>
            <a href="www.onet.pl">ONET.PL</a>
          </li>
        </ul>
        <Signature />
      </article>
    </div>
  );
}
