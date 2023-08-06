import React from 'react';

import './style.css';

export function TextFundaments() {
  return (
    <div>
      <div class="faked-tags">
        <h1 class="faked-tags-h1">Tytuł</h1>
        <span class="faked-tags-date">05.2023</span>
        <h3 class="faked-tags-h3">
          H<sub>2</sub>0 is good for you
        </h3>

        <p className="faked-tags-text">
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>
        <h3 class="faked-tags-h3">
          25<sub1>th</sub1>birthday
        </h3>
        <p className="faked-tags-text">
          Make the next birthday you celebrate a special one with a hand-picked{' '}
          <i>happy birthday</i> <q>quote</q> or wish that will surely make that
          special someone’s day a great day. Whether you’re celebrating your
          birthday or someone else’s, you can rely on our list of happy birthday
          quotes to help put a smile on someone’s face. From inspirational to
          funny to cute sayings, browse our list of <q>quotes</q> to find one
          that resonates with you. <del>Nothing</del> can stop you!
        </p>
        <h3 class="faked-tags-h3">
          Why not to use <ins>lists</ins> ?
        </h3>
        <p className="faked-tags-text5">
          <h5 class="faked-tags-h5">
            A lot of things to do <i>#todo</i>
          </h5>
        </p>
        <p className="faked-tags-ul">
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
