import './styles.css';

export const SelectorsAndCascade = () => {
  return (
    <div>
      <h2>Selektory i kaskadowość</h2>
      <section>
        <h3>Podstawowe selektory</h3>
        <ul>
          <li>Universal selector (*)</li>
          <li>Element selectot (np. h2)</li>
          <li className="class">Class selector</li>
          <li id="ID">Id selector</li>
        </ul>
      </section>
      <section>
        <h3>Kombinatory</h3>
        <ul>
          <li className="descendant">
            Descendant selector (spacja)
            <br />
            <span>descendant</span>
          </li>
          <li className="child-selector">
            Child selector (&gt;)
            <br />
            <span className="son">
              son <span className="grandson">grandson</span>
            </span>
          </li>
          <li>
            Adjacent sibling selector (+)
            <br />
            <b>1</b>
            <b>2</b>
            <b className="adjacent-sibling">3</b>
            <b>4</b>
            <b>5</b>
          </li>
          <li>
            General sibling (~)
            <br />
            <b>1</b>
            <b>2</b>
            <b className="general-sibling">3</b>
            <b>4</b>
            <small>5</small>
            <i>6</i>
            <i>7</i>
            <b>8</b>
          </li>
        </ul>
      </section>
      <section>
        <h3>Pseudo-klasy</h3>
        <p>
          <b>Przykłady:</b>
          <ul className="pseudo">
            <li>:first-child</li>
            <li>:last-child</li>
            <li className="hover-over-me">:hover</li>
            <li>
              :focus
              <br />
              <input type="text"></input>
            </li>
            <li>
              :visited{' '}
              <a className="link-visited" href="http://google.com">
                google.com
              </a>
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h3>Pseudo-elementy</h3>
        <b>Przykłady:</b>
        <ul>
          <li>::before</li>
          <li>
            ::after
            <br />
            <span className="before after">Before</span>
          </li>
          <li>::first-line</li>
        </ul>
      </section>
      <section>
        <h3>Attribute selectors</h3>
        <ul className="attribute-selector">
          <li id="example">[attribute] example:</li>
          <li>
            [attribute=value]
            <br />
            <a href="http://google.pl" className="external-link">
              google.pl
            </a>
          </li>
          <li>
            [attribute*=value]
            <br />
            <a href="www.yahoo.com/" className="external-link">
              yahoo.com
            </a>
          </li>
          <li>
            [attribute^=value]
            <br />
            <a href="http://google.com" className="external-link">
              google.com
            </a>
          </li>
          <li>
            [attribute$=value]
            <br />
            <a href="google.com" className="external-link">
              google.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
