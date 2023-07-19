import './styles.css';
import foxImage from './fox.png';

export function FloatsAndPositioning() {
  return (
    <div className="wszystko">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      <p className=" position">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className="div-z-nachodzacym-divem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <p className="tekst-nachodzi-kwadrat">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="nachodzi-zdj">
        <img className="fox-img" src={foxImage} alt="fox"></img>
        <p className=" tekst-i-img">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="sam-szary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <p className="maly-kwadrat-wyzej">zapisz na poźniej</p>
      </div>
      <p className="buttom-text">zapisz na później</p>
    </div>
  );
}
