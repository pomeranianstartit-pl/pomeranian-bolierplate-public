import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import snowdog from './snowdog.jpg';
import ArrowBack from '@mui/icons-material/ArrowBack';

const FigmaFloatDesign = () => {
  return (
    <>
      <div>
        <h3>
          <Link className="float-links" to="/Blog" startIcon={<ArrowBack />}>
            {' '}
            BLOG
          </Link>
          <Link
            className="float-links"
            style={{ marginLeft: '10px' }}
            to="/exercises"
          >
            {' '}
            EXERCISE
          </Link>
        </h3>
        <p style={{ fontSize: '22px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p style={{ marginLeft: '40px', fontSize: '22px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="meat">
        <div id="no1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
        </div>
        <div id="no2">
          <img src={snowdog} alt="white dog on a snow desert" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div id="no3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
        </div>
        <div className="button-holder">
          <button id="button-saveme">zapisz na później</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
        </p>{' '}
        <p>
          {' '}
          Leo vel orci porta non pulvinar neque laoreet. In egestas erat
          imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.
        </p>
        <div
          style={{
            width: '985px',
            height: '200px',
            border: ' 1px solid black',
            borderRadius: '8px',
          }}
        />
      </div>
    </>
  );
};

export default FigmaFloatDesign;
