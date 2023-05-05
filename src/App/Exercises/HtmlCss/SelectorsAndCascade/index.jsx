import './styles.css';

export function SelectorsAndCascade() {
  return (
    <div className="background1">
      <div className="one">Jestem unique 1</div>
      <ol className="lista">
        <li>
          <main id="main">
            <div className="two">Jestem unique 2</div>
            <div className="three">Jestem unique 3</div>
          </main>
          <div className="three">Jestem unique 3</div>
        </li>
      </ol>
      <div className="four">Jestem unique 4</div>
      <div className="five">Jestem unique 5</div>
    </div>
  );
}
