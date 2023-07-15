import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const ImagesFiles = () => {
  return (
    <>
      <h1>Pliki graficzne</h1>
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
    </>
  );
};
