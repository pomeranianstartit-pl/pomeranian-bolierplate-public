import './styles.css';

export const StandardTags = () => {
  return (
    <div>
      [10:30] Michał Hadrysiak
      <>
        <div class="original-tags">
          <h1>Tytuł</h1>

          <small>05.2023</small>

          <h3>
            H<sub>2</sub>O is good for you
          </h3>

          <p>
            Staying <b>hydrated</b> is one of the best things you can do for
            your overall health. Staying <b>hydrated</b> can help support
            physical performance, prevent headaches and constipation, and more.
          </p>

          <h3>
            25<sup>th</sup> birthday
          </h3>

          <p>
            Make the next birthday you celebrate a special one with a
            hand-picked happy birthday <q>quote</q> or wish that will surely
            make that special someone’s day a great day. Whether you’re
            celebrating your birthday or someone else’s, you can rely on our
            list of <i>happy birthday</i> <q>quotes</q> to help put a smile on
            someone’s face. From inspirational to funny to cute sayings, browse
            our list of <q>quotes</q> to find one that resonates with you.{' '}
            <del>Nothing</del> can stop you!
          </p>

          <h3>
            Why not to use <ins>lists</ins> ?
          </h3>

          <p>
            <h5>
              A lot of things to do <i>#todo</i>
            </h5>

            <ul>
              <li>Todo 1</li>

              <li>Todo 2</li>

              <li>Todo 3</li>
            </ul>
          </p>
        </div>

        <div class="faked-tags">
          <div class="faketitle">Tytuł</div>

          <div class="fakedata">05.2023</div>

          <div className="faketitle2">
            H<span className="fakeverticalsub">2</span>O is good for you
          </div>

          <div>
            <span className="bold">hydrated</span>
            Staying is one of the best things you can do for your overall
            health.
            <span className="bold">hydrated</span>
            can help support physical performance, prevent headaches and
            constipation, and more.
          </div>

          <div className="fakebirthday">
            25<sup className="fakeverticalsuper">th</sup> birthday
          </div>

          <div>
            Make the next birthday you celebrate a special one with a
            hand-picked happy birthday <span className="fakequote">quote</span>
            or wish that will surely make that special someone’s day a great
            day. Whether you’re celebrating your birthday or someone else’s, you
            can rely on our list of <span>happy birthday</span>
            <span>quotes</span> to help put a smile on someone’s face. From
            inspirational to funny to cute sayings, browse our list of
            <span className="fakequote"> quotes</span> to find one that
            resonates with you. <span className="fakelinethrough">Nothing</span>{' '}
            can stop you!
          </div>

          <div className="faketitle3">
            Why not to use <span className="fakeunderline">lists</span> ?
          </div>

          <div>
            <div className="faketitle4">
              A lot of things to do <span>#todo</span>
            </div>

            <ul>
              <li>Todo 1</li>
              <li>Todo 2</li>
              <li>Todo 3</li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};
