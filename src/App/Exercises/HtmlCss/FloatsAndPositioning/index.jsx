import './style.css';
import snow_wolf from '../../../Images/snow-wolf.png';
export function FloatsAndPositioning() {
  return (
    <div>
      <h2>Właściwość position </h2>
      <ol>
        <li>
          {' '}
          Właściwość position określa jaką pozycję ma dany element.Mamy kilka
          rodzajów position. Domyślnie 'position:static', nie wpływa na nich
          pozycjonowanie za pomocą tagów 'top,right,bottom,left'.
        </li>
        <ul>
          <li className="list-description">
            'position:relative'- sprawia, że element jest w pozycji relatywnej.
            Można używać tagów 'top,right,bottom,left'. Pozycjonowanie odbywa
            się względem krawędzi tego elementu HTML. Element relative nie
            wpływa swoim rozmiarem na ułożenie pozostałych elementów HTML.{' '}
          </li>
          <li className="list-description">
            'position:absolute'- sprawia, że element jest w pozycji absolutnej.
            Można używać tagów 'top,right,bottom,left'. Pozycjonowanie tego
            elementu odbywa się względem najbliższego rodzica posiadającą
            position każdą inną niż static, w innym przypadku pozycjonowanie
            jest względem okna przeglądarki.
          </li>
          <li className="list-description">
            'position:fixed'-sprawia, że element jest w pozycji ustalonej. Można
            używać tagów 'top,right,bottom,left'. Pozycjonowanie jest wykonywany
            względem okna przeglądarki{' '}
          </li>
        </ul>
        <li>
          {' '}
          float- opływanie elementu(obrazku) w tekście. Kiedyś float używano do
          ustawiania elementów na stronie. Teraz tylko flex lub grid używa się
          do ustawiania elementów na stronie.
        </li>
        <li>
          z-index - właściwość ustawiająca element w osi z, ogl chodzi o to
          który element ma być "najwyżej" ułożony w strukturze i aby nie był
          zakrywany przez inne elementy. 3 kwadrat ma największą liczbę
          ustawioną dlatego jest nad dwoma pozostałymi.
        </li>
      </ol>
      <div className="floats__positioning">
        <div className="floats__positioning-relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
          <div className="floats__positioning-absolute">
            dymek z tekstem na pozycji absolutnej
          </div>
        </div>

        <div className="square-wrapper">
          <div className="square square-1">
            <div className="square square-2"></div>

            <div className="square square-3"></div>
          </div>
        </div>

        <div className="float-wrapper">
          <img
            className="float-img"
            width={100}
            height={100}
            src={snow_wolf}
            alt="Wolfu"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
