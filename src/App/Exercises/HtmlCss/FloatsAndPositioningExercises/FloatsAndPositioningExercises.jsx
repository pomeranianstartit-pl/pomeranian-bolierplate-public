import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const FloatsAndPositioningExercises = () => {
  return (
    <div className="containerwhole">
      <div className="header1">
        <div className="paragraph1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <br></br>
        <div className="paragraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="sidecontainer1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="container1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestieda iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </div>
      <div className="container2">
        <img src={snowWolf} alt="Snow wolf" className="snow-wolf" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};
