import { useState } from 'react';

import './styles.css';

export function Exercise() {
  return (
    <div className="floats-wrapper">
      <p className="floats-p1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <p className="floats-p2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="floats-div3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. lorem donec.t dolore magna aliqua. Nibh
        mauris cursus mattis molestiea iaculis at. lorem donec.
        <p className="floats-p4-absolute">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="floats-div4">
        <img className="Floats-img-fox" src="/fox.png"></img>

        <p className="floats-p5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div>
        <p className="floats-div5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.{' '}
        </p>

        <button>Zapisz na później</button>
      </div>

      <div className="floats-div6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nibh mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nibh mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{' '}
        </p>
      </div>
      <div>
        <img src="/block1.png"></img>

        <img src="/block2.png"></img>

        <img src="/block3.png"></img>
      </div>
    </div>
  );
}
