import './styles.css';
import snow_wolf from '../../../Images/snow-wolf.png';

export function Exercise() {
  return (
    <div className="floats__positioning">
      <div className="floats__positioning-relative">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
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
          alt="wolf"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          commodi ad voluptatum possimus quos labore quae explicabo suscipit
          dicta neque quisquam vitae officiis dolores delectus consectetur
          necessitatibus dolor, et maxime!
        </p>
      </div>
    </div>
  );
}
