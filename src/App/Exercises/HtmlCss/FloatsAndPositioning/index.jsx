import './styles.css';

import whitefox from './whitefox.png';

export function Exercise() {
  return (
    <>
      <div className="float-exercise-header">
        <h3>&lt; BLOG &lt; ĆWICZENIE</h3>
      </div>
      <div className="float-exercise-overall">
        <div className="float-exercise-1-paragraph">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <br />
          <span className="float-exercise-span-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div>
          <p className="float-exercise-2-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
          <span classname="float-exercise-span-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="float-exercise-3-paragraph">
          <img src={whitefox} alt="Biały lis na śniegu" />
          <span className="float-exercise-3-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
        <div classname="float-exercise-footer"></div>
        <div>
          <span className="float-exercise-span-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </span>
        </div>
        <div>
          <span className="float-exercise-span-4">zapisz na później</span>

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
          <br />
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
        </div>
        <div className="float-exercise-squares">
          <p className="square1"></p>
          <p className="square2"></p>
          <p className="square3"></p>
        </div>
      </div>
    </>
  );
}
