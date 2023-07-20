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
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
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
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <p className="maly-kwadrat-wyzej">zapisz na poźniej</p>
      </div>
      <p className="buttom-text">zapisz na później</p>
      <div className="grid">
        <p className="sam-text">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
          <p>
            Leo vel orci porta non pulvinar neque laoreet. In egestas erat
            imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
            sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
            blandit turpis cursus in. Ornare quam viverra orci sagittis eu.
            Metus dictum at tempor commodo ullamcorper a. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi. Amet massa vitae tortor
            condimentum lacinia quis. Quis enim lobortis scelerisque fermentum
            dui faucibus in ornare. Auctor elit sed vulputate mi.
          </p>
        </p>
      </div>
      <div className="ostatni-prostokad"></div>
      <dic className="box">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </dic>
    </div>
  );
}
