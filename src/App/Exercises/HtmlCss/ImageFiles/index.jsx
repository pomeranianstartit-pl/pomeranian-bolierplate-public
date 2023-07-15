import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const ImageFiles = () => {
  return (
    <div>
      <h1>Pliki graficzne</h1>
      <section>
        <h2>Formaty plików</h2>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/JPEG">jpg</a>
            <cite>
              compression works by averaging out colours of nearby pixels. PEG
              typically achieves 10:1 compression with little perceptible loss
              in image quality. Doesn't supports transparency.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/PNG">png</a>
            <cite>
              No data is lost during compression and no compression artefacts
              are introduced in the image. supports transparency.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/SVG">svg</a>
            <cite>
              Scalable Vector Graphics (SVG) is an XML-based vector image format
              for defining two-dimensional graphics. Gest for scalability.
            </cite>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/GIF">gif</a>
            <cite>
              Supports animation. GIF is unsuitable for images with transparent
              backgrounds (PNG is better).
            </cite>
          </li>
        </ul>
      </section>
      <section>
        <h2>Ćwiczenie dodać obrazek</h2>

        <code>(img) ścieżka do pliku src\App\Images</code>

        <ul>
          <li>
            to nie zadziała:
            <ul>
              <li>
                <img
                  src="../../../Images/snow-wolf.png"
                  alt="relative path - to this file"
                />
              </li>

              <li>
                <img
                  src="src/App/Images/snow-wolf.png"
                  alt="relative path - to project directory"
                />
              </li>

              <li>
                <img
                  src="/home/andy/projects/pomeranian-bolierplate-public/src/App/Images/snow-wolf.png"
                  alt="absolute path"
                />
              </li>
            </ul>
          </li>

          <li>
            using html <img src="/start-it.svg" alt="ddd" />
          </li>

          <li>
            using react
            <img src={snowWolf} alt="snow wolf" />
          </li>
        </ul>

        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </section>
      <section>
        <h2>Extras</h2>

        <p>relative path vs absolute path</p>

        <p>
          <a href="https://tinypng.com/">tinyPNG</a>
        </p>
      </section>
      <section>
        <RoundImage size="150px" />
        <RoundImage size="250px" />
        <RoundImage size="350px" />
      </section>
    </div>
  );
};
