import './styles.css';
import { NavLink } from 'react-router-dom';
import snowWolfImg from '../../Images/snow-wolf.png';

export const BlogExercises = () => {
  return (
    <div className="wrap-blogexe">
      <NavLink to="/dashboard" className="backBtn">
        {'<'}Blog
      </NavLink>
      <NavLink to="/blog-exercises" className="backBtn">
        {'<'}Ćwiczenie
      </NavLink>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="gray-area">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>
      <div className="red-area">
        <img src={snowWolfImg} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>
      <div className="dark-area">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>
      <button className="save">Zapisz na później</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestie a iaculis at. Dictum varius duis at consectetur lorem
        donec. Sit amet dictum sit amet justo. Fringilla phasellus faucibus
        scelerisque eleifend donec. Elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere. Arcu dictum varius duis at
        consectetur lorem. Massa ultricies mi quis hendrerit.{' '}
      </p>
      <p>
        Leo vel orci porta non pulvinar neque laoreet. In egestas erat imperdiet
        sed euismod nisi porta lorem. Ut porttitor leo a diam sollicitudin
        tempor id. Tortor at auctor urna nunc id. Gravida quis blandit turpis
        cursus in. Ornare quam viverra orci sagittis eu. Metus dictum at tempor
        commodo ullamcorper a. Vestibulum mattis ullamcorper velit sed
        ullamcorper morbi. Amet massa vitae tortor condimentum lacinia quis.
        Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Auctor
        elit sed vulputate mi.
      </p>
      <div className="frame">
        <div className="sqr1"></div>
        <div className="sqr2"></div>
        <div className="sqr3"></div>
      </div>
    </div>
  );
};
