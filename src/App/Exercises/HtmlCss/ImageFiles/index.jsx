import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';
import { RoundImage } from '../../../Components/RoundImage';

export const ImageFiles = () => {
  return (
    <div>
      <h1>Pliki graficzne</h1>

      <section>
        <h2>Formaty plików</h2>

        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/JPEG">jpg</a>{' '}
            <cite>
              compression works by averaging out colours of nearby pixels. PEG
              typically achieves 10:1 compression with little perceptible loss
              in image quality. Doesn't supports transparency.
            </cite>
          </li>

          <li>
            <a href="https://en.wikipedia.org/wiki/PNG">png</a>{' '}
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
            <a href="https://en.wikipedia.org/wiki/GIF">gif</a>{' '}
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

        <img src="" alt="" />
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
