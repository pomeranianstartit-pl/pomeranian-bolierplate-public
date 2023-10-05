import './styles.css';

import wolf from '../../../Images/snow-wolf.png';

export function Exercise() {
  return (
    <div className="positioning-exercise">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>

      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>

      <div className="positioning-exercise-absolute">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <div className="positioning-exercise-absolute-tooltip">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <div className="save-for">Zapisz na później</div>

      <div className="positioning-exercise-float">
        <img src={wolf} width={400} height={305} alt="Piesio" />

        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>

        {/* <span className="float-test"> */}

        <div className="clearfix">
          ŻEBY NIE BYŁ OPŁYWANY Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </div>
      </div>

      <div className="positioning-exercise-sticky">
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec. Sit amet dictum sit amet justo. Fringilla phasellus faucibus
        scelerisque eleifend donec. Elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere. Arcu dictum varius duis at
        consectetur lorem. Massa ultricies mi quis hendrerit. Leo vel orci porta
        non pulvinar neque laoreet. In egestas erat imperdiet sed euismod nisi
        porta lorem. Ut porttitor leo a diam sollicitudin tempor id. Tortor at
        auctor urna nunc id. Gravida quis blandit turpis cursus in. Ornare quam
        viverra orci sagittis eu. Metus dictum at tempor commodo ullamcorper a.
        Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Amet massa
        vitae tortor condimentum lacinia quis. Quis enim lobortis scelerisque
        fermentum dui faucibus in ornare. Auctor elit sed vulputate mi
      </div>

      <div className="positioning-exercise-z-index">
        <div className="square square-base">
          <div className="square square-1"></div>

          <div className="square square-2"></div>
        </div>
      </div>
    </div>
  );
}
