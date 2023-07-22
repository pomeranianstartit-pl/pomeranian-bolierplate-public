import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const ImagesFiles = () => {
  return (
    <div>
      <h2>Pliki graficzne</h2>
      <section>
        <h3>Formaty plików</h3>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/JPEG">
              <b>jpg</b>
            </a>
            <br />
            <cite>
              compression works by averaging out colours of nearby pixels. PEG
              typically achieves 10:1 compression with little perceptible loss
              in image quality. Doesn't supports transparency.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/PNG">
              <b>png</b>
            </a>
            <br />
            <cite>
              No data is lost during compression and no compression artefacts
              are introduced in the image. supports transparency.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/SVG">
              <b>svg</b>
            </a>
            <br />
            <cite>
              Scalable Vector Graphics (SVG) is an XML-based vector image format
              for defining two-dimensional graphics. Gest for scalability.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/GIF">
              <b>gif</b>
            </a>
            <br />
            <cite>
              Supports animation. GIF is unsuitable for images with transparent
              backgrounds (PNG is better).
            </cite>
          </li>
        </ul>
      </section>
      <section>
        <h3>Dodawanie obrazka</h3>
        <code>(img) ścieżka do pliku src\App\Images</code>
        <ul>
          <li>
            to nie zadziała:
            <ul>
              <li>
                <img
                  src="../../../Images/snow-wolf.png"
                  alt="Relative path - to this file"
                />
              </li>
              <li>
                <img
                  src="src/App/Images/snow-wolf.png"
                  alt="Relative path - to project directory"
                />
              </li>
              <li>
                <img
                  src="/home/mpalka/Projects/pomeranian-bolierplate-public/src/App/Images"
                  alt="Absolute path"
                />
              </li>
            </ul>
          </li>
          <li>
            using html <br />
            <img src="/start-it.svg" alt="Public folder" />
          </li>
          <li>
            using react <br />
            <img src={snowWolf} alt="React" className="snowWolf" />
          </li>
        </ul>
      </section>
      <section>
        <h3>Extras</h3>
        <p>relative path vs absolute path</p>
        <p>
          <a href="https://tinypng.com/">tinyPNG</a>
        </p>
      </section>
    </div>
  );
};
