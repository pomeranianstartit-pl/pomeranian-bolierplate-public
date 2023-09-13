import './styles.css';

import whitefox from './whitefox.png';

export function Exercise() {
  return (
    <>
      <div className="float-exercise-header">
        <h3>&lt; BLOG &lt; ĆWICZENIE</h3>
      </div>
      <div className="float-exercise-overall">
        <div className="float-exercise-1-paragraph">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <br />
          <span className="float-exercise-span-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div>
          <p className="float-exercise-2-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
          <span classname="float-exercise-span-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="float-exercise-3-paragraph">
          <img src={whitefox} alt="Biały lis na śniegu" />
          <span >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
      </div>
    </>
  );
}
