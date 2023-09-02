import snowWolf from '../../../../Images/snow-wolf.png';

import './styles.css';

export const Float = () => {
  return (
    <div>
      <div className="body__desktop1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="body__desktop2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="float__layout-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="grey_field">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec.
      </div>
      <div className="float__image">
        <div className="text_next_to_image">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <img src={snowWolf} alt="Lis" />
        <div className="float__layout-right2">Zapisz na póżniej.</div>

        <div className="dark_grey_field">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </div>

        <div className="float__layout-center">Zapisz na póżniej.</div>

        <div className="text__lorem-long">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit. Leo vel orci porta non pulvinar neque laoreet. In egestas
          erat imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.
        </div>
      </div>
    </div>
  );
};
