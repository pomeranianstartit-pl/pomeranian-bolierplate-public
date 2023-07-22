import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const FloatsAndPositioningExercises = () => {
  return (
    <p>
      <p className="first">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="second">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="third">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br />
        incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis
        molestie <br /> a iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </p>

      <p className="fourth">
        <img src={snowWolf} alt="Snow wolf" className="snow-wolf" /> Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>
    </p>
  );
};
