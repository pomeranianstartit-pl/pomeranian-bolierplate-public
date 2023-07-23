import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const Background = () => {
  return (
    <article>
      <h1>Tła</h1>
      <section>
        <div>
          Image added using <code>img</code> element.
        </div>
        <br />
        <img src={snowWolf} alt="snow wolf" />
        <h3>CSS - Background property</h3>
        <ul className="backgrounds">
          <li className="background-color">background-color</li>
          <li>
            background-image <strong>(no alt attribute in div)</strong>
            <div className="background-image-url" />
          </li>
          <li>
            background-position
            <div className="background-image-position" />
          </li>
          <li>
            background-repeat
            <div className="background-image-repeat" />
          </li>
          <li>
            background-size <div className="background-image-size" />
          </li>
        </ul>
      </section>
      <section>
        <h3>Sources:</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">
          CSS - background
        </a>
      </section>
    </article>
  );
};
