import './styles.css';
import snow from './snow.png';

export function FloatsAndPositioning() {
  return (
    <div className="float-box">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="float-p-1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="float-div-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>

        <p className="float-div-1-p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="float-div-2">
        <img className="float-div-2-img-1" src={snow} alt="fox"></img>
        <p className="float-div-2-p-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <p className="float-p-3-fixed">zapisz na poźniej</p>
      <p className="float-p-4-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </p>
      <p className="float-p-5-small">zapisz na poźniej</p>
      <div className="float-div-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
        </p>
        <p>
          Leo vel orci porta non pulvinar neque laoreet. In egestas erat
          imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.
        </p>
      </div>
      <div className="float-div-4">
        <div className="float-div-4-div1"></div>
        <div className="float-div-4-div2"></div>
        <div className="float-div-4-div3"></div>
      </div>
    </div>
  );
}
