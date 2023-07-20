import './styles.css';
import React from 'react';

export function Exercise() {
  return (
    <div className="pageWrapper">
      <p className="text1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="text2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="box1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.{' '}
        </p>
        <div className="box2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="div3Withphoto">
        <img
          src={require('/home/krzys/projects/pomeranian-bolierplate-public/src/App/Images/snow-wolf.png')}
          alt=""
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="div4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.{' '}
          <div className="div5">
            <p>zapisz na później</p>
          </div>
        </p>
      </div>

      <div className="div7">
        <div className="div6">
          <p>zapisz na później</p>
        </div>
      </div>
      <div className="div6text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
          <hr />
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

      <div className="div8">
        <div className="div8box1">
          <div className="div8box2"></div>
          <div className="div8box3"></div>
        </div>
      </div>
    </div>
  );
}
