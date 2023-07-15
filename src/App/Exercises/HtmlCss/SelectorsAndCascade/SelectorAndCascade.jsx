// import './styles.css';

export const SelectorsAndCascade = () => {
  return <div>

    <h1>Selektory</h1>
    <section>
      <h3>podstawowe slektory</h3>
      {<ul>
        <li>Universal selector '*'</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>}
    </section>
    <section>
      <h2>kombinatory      </h2>


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


    </section>
  </div>;
};
