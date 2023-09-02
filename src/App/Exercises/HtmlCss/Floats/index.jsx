import './styles.css';
import lis from '../../../Images/snow-wolf.png';

export function Exercise() {
  return (
    <div className="bloczki">
      <div className="blok1">
        <p className="p1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* ///////////////////////////////////////// */}
      <div className="blok2_szary">
        <p className="p3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie iaculis at. Dictum varius duis at
          consectetur lorem donec
        </p>
      </div>
      {/* ///////////////////////////////////////// */}
      <div className="blok3_pink">
        <p className="p4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* ///////////////////////////////////////// */}
      <div className="blok4_pink_img">
        <p className="p5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <img alt="lis" src={lis} />
      {/* ///////////////////////////////////////// */}
      <div className="blok5_ciemny">
        <p className="p6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>

      {/* ///////////////////////////////////////// */}
      <div className="blok6_pink_boczny">
        <p className="p7">Zapisz na później</p>
      </div>

      {/* ///////////////////////////////////////// */}
      <div className="blok7_pink_srodek">
        <button>Zapisz na później</button>
      </div>

      {/* ///////////////////////////////////////// */}
      <div className="blok8">
        <p className="p9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
        </p>
        <p className="p10">
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
      {/* /////////////////////////////////////////////// */}
      <div className="blok9">
        <div className="kwadraty">
          <div className="kwad1"></div>
          <div className="kwad2"></div>
          <div className="kwad3"></div>
        </div>
      </div>
    </div>
  );
}
