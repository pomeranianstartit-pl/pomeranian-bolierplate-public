import './styles.css';

export const BoxModel = () => {
  return (
    <div>
      <h1>BoxModel oraz display</h1>
      <section>
        <h1>Intro</h1>
        <div className="testing-box-model">
          <div>
            The CSS box model is essentially a box that wraps around every HTML
            element. It consists of: margins, borders, padding, and the actual
            content. <strong>*use DevTools inspector to see details.</strong>
          </div>
        </div>
      </section>
      <section>
        <h2>block elements</h2>
        e.g.
        <ul>
          <li>h1-h6</li>
          <li>p</li>
          <li>article, section</li>
          <li>div</li>
        </ul>
      </section>
      <section>
        <h2>inline elements</h2>
        e.g.
        <ul>
          <li>a</li>
          <li>q</li>
          <li>span</li>
          <li>strong</li>
          <li>code</li>
        </ul>
      </section>

      <section>
        <h2>display - css property</h2>
        <h3>display: inline</h3>
        <h4>Example 1</h4>
        <div className="display-inline">
          Lorem ipsum <span>dolor</span> sit amet, consectetur{' '}
          <span>adipiscing</span> elit. Vestibulum
          <span>consequat</span>scelerisque elit sit amet consequat. Aliquam
          erat volutpat. <span>Aliquam</span> <span>venenatis</span> gravida
          nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{' '}
        </div>

        <h4>Example 2</h4>
        <div className="display-inline">
          <span>Important Button 1</span>
          <span>Important Button 2</span>
          <span>Important Button 3</span>
          <span>Important Button 4</span>
          <span>Important Button 5</span>
          <span>Important Button 6</span>
          <span>Important Button 7</span>
          <span>Important Button 8</span>
          <span>Important Button 9</span>
          <span>Important Button 10</span>
        </div>

        <h3>display: block</h3>
        <div className="display-block">
          Lorem ipsum <span>dolor</span> sit amet, consectetur{' '}
          <span>adipiscing</span> elit. Vestibulum
          <span>consequat</span>scelerisque elit sit amet consequat. Aliquam
          erat volutpat. <span>Aliquam</span> <span>venenatis</span> gravida
          nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{' '}
        </div>

        <h3>display: inline-block</h3>
        <h4>example 1</h4>
        <div className="display-inline-block">
          Lorem ipsum <span>dolor</span> sit amet, consectetur{' '}
          <span>adipiscing</span> elit. Vestibulum
          <span>consequat</span>scelerisque elit sit amet consequat. Aliquam
          erat volutpat. <span>Aliquam</span> <span>venenatis</span> gravida
          nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{' '}
        </div>
        <h4>example 2</h4>
        <div className="display-inline-block">
          <span>Aliquam</span> <span>venenatis</span>
        </div>
        <h4>example 3</h4>
        <div className="display-inline-block">
          <span>Button 1</span>
          <span>Button 2</span>
          <span>Button 3</span>
          <span>Button 4</span>
          <span>Button 5</span>
          <span>Button 6</span>
          <span>Button 7</span>
          <span>Button 8</span>
          <span>Button 9</span>
          <span>Button 10</span>
        </div>
        <h3>display: none</h3>
        <div className="display-none">
          Lorem ipsum <span>dolor</span> sit amet, consectetur{' '}
          <span>adipiscing</span> elit. Vestibulum
          <span>consequat</span>scelerisque elit sit amet consequat. Aliquam
          erat volutpat. <span>Aliquam</span> <span>venenatis</span> gravida
          nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.{' '}
        </div>
        <h3>display vs conditional rendering</h3>
        {true && <div>Conditional rendering</div>}
      </section>

      <section>
        <h2>box-sizing</h2>

        <h3>border-box</h3>

        <div className="box-sizing-border-box">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit
          architecto maxime sequi ullam explicabo similique! Voluptatibus
          eveniet ipsam deserunt expedita quos illo amet perferendis voluptate
          odit, quae officiis minima.
        </div>

        <h3>content-box</h3>

        <div className="box-sizing-content-box">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit
          architecto maxime sequi ullam explicabo similique! Voluptatibus
          eveniet ipsam deserunt expedita quos illo amet perferendis voluptate
          odit, quae officiis minima.
        </div>
      </section>

      <section>
        <h2>overflow</h2>

        <div className="testing-overflow">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit
          architecto maxime sequi ullam explicabo similique! Voluptatibus
          eveniet ipsam deserunt expedita quos illo amet perferendis voluptate
          odit, quae officiis minima.
        </div>
      </section>

      <section className="section-css-units">
        <h2>Jednostki CSS</h2>

        <h3>px</h3>

        <div className="css-units-px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem
          magni tenetur, modi quibusdam dolore dolores quisquam! Ab, dolorem
          assumenda aut cupiditate et necessitatibus ullam? Quidem vitae dicta
          ipsum recusandae.
        </div>

        <h3>em</h3>

        <div className="css-units-em">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem
          magni tenetur, modi quibusdam dolore dolores quisquam! Ab, dolorem
          assumenda aut cupiditate et necessitatibus ullam? Quidem vitae dicta
          ipsum recusandae.
        </div>

        <h3>rem</h3>

        <div className="css-units-rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem
          magni tenetur, modi quibusdam dolore dolores quisquam! Ab, dolorem
          assumenda aut cupiditate et necessitatibus ullam? Quidem vitae dicta
          ipsum recusandae.
        </div>

        <h3>%</h3>

        <div className="css-units-percent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem
          magni tenetur, modi quibusdam dolore dolores quisquam! Ab, dolorem
          assumenda aut cupiditate et necessitatibus ullam? Quidem vitae dicta
          ipsum recusandae.
        </div>

        <h3>other...</h3>

        <h3>Final comments</h3>

        <div>
          jakie zachowanie jednostek jest prawidłowe i warto to doprecyzować z
          UX
        </div>
      </section>
    </div>
  );
};
