// import './styles.css';

export const SelectorsAndCascade = () => {
  return (
    <div>
      <h1>Selektory i kaskadowość</h1>
      <section>
        <h2>Podstawowe selektory</h2>
        <ul>
          <li>Universal selector *</li>
          <li>Element selector eg. h2, span, p</li>
          <li className="class-selector">Class selector</li>
          <li id="id-selector">Id selector</li>
        </ul>
      </section>
      <section>
        <h2>Kombinatory</h2>
        <p>dobre do stylowania list, ale nie tylko</p>
        <ul>
          <li className="descendant">
            descendant selector (spacja) <span>example: child</span>
          </li>
          <li className="child-selector">
            Child selector &gt;{' '}
            <span className="son">
              son <span className="grandson">grandson</span>
            </span>
          </li>
          <li>
            Adjacent sibling selector (+) <b>1</b>
            <b>2</b>
            <b className="adjacent-sibling">3</b>
            <b>4</b>
            <b>5</b>
          </li>
          <li>
            General sibiling (~) <b>1</b>
            <b>2</b>
            <b className="general-sibling">3</b>
            <b>4</b>
            <small>3</small>
            <i>ddd</i>
            <b>5</b>
          </li>
        </ul>
      </section>
      <section>
        <h2>Pseudo klasy</h2>
        <p>
          examples:
          <ul className="pseudo">
            <li>:first-child</li>
            <li>:last-child</li>
            <li className="hover-over-me">:hover</li>
            <li className="has-focus">:focus</li>
            <li>
              :visited{' '}
              <a className="link-visited" href="http://google.com">
                google.com
              </a>
            </li>
          </ul>
        </p>
        <input type="text" name="" id=""></input>
      </section>
      <section>
        <h2>Pseudo elementy</h2>
        <ul>
          <li>
            ::before <span className="before after"> Example </span>
          </li>
          <li>::after</li>
          <li>::first-line</li>
        </ul>
      </section>
      <section>
        <h2>Attribute selectors</h2>
        <ul className="attribute-selector">
          <li id="example">[attribute] example:</li>

          <li>
            [attribute=value] example:
            <a href="http://google.pl" className="external-link">
              google.com
            </a>
          </li>

          <li>
            [attribute*=value] example:
            <a href="http://google.com" className="external-link">
              google.com
            </a>
          </li>

          <li>
            [attribute^=value] example:
            <a href="http://google.com" className="external-link">
              google.com
            </a>
          </li>

          <li>
            [attribute$=value] example:
            <a href="http://google.com" className="external-link">
              google.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
