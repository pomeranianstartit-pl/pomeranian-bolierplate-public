import './styles.css';
import snow_wolf from '../../../Images/snow-wolf.png';

export function FloatsAndPositioning() {
  return (
    <div className="floatsAndPositioning">
      <div className="floatsAndPositioningRelative">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <div className="floatsAndPositioningAbsolute">dymek</div>
      </div>

      <div className="square-wrapper">
        <div className="square square1">
          <div className="square square2"></div>
          <div className="square square3"></div>
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
