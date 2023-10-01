import './styles.css';

export function Exercise() {
  return (
    <div>
      <p>To jest jeden paragraf</p>
      <div>Jestem bardzo unikalnym elementem HTML</div>
      <p className="secondParagraph">To jest drugi paragraf</p>
      <button id="sellOpelButtonId">Srzedam opla</button>
      <button id="buyOpelButtonId">Kupię opla</button>
      <div className="firstDiv">
        <a href="http://wp.pl">Przenieś mnie do wp.pl</a>
      </div>

      <div className="secondDiv">
        <a href="http://onet.pl">Przenieś mnie do onet.pl</a>
      </div>

      <ul id="usersList">
        <li>Wiola</li>
        <li>Jola</li>
        <li>Ola</li>

        <li>
          <a href="www.onet.pl">Wiola</a>
        </li>
        <li>
          <a href="www.onet.pl">Jola</a>
        </li>

        <li>
          <a href="www.onet.pl">Ola</a>
        </li>

        <li>Ola</li>
        <li>Jola</li>
      </ul>

      <div>
        <h2>To jest nagłówek</h2>
        <p>To jest paragraf za nagłówkiem</p>
        <p>To jest p</p>
        <div>To jest div pomiedzy p</div>
        <p>To jest p</p>
      </div>
    </div>
  );
}
