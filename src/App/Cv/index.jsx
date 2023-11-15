import './styles.css';
import myphoto from '../Images/myphoto.jpg';

export const CV = () => {
  return (
    <div className="container--curriculum">
      <div className="partonecv">
        <h1 className="dashboard-greeting">{'<'}Moje CV</h1>
        <p className="dashboard-description">
          Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
          doświadczenia.
        </p>
      </div>
      <div className="parttwocv">
        <div className="cvinside">
          <div className="cvinside1">
            <h3>Experience</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="cvinside1">
            <h3>Education</h3>
          </div>

          <div className="cvaside">
            <div className="imienazwisko">
              <h2>Katarzyna Olkowska</h2>
            </div>

            <div className="email1">
              <p>e-mail:</p>
              <p> olkowskakatarzyna2@gmail.com</p>
            </div>

            <div className="telefon1">
              <p>telefon:</p>
              <p> 000 000 000</p>
            </div>

            <div className="miasto1">
              <p>miasto:</p>
              <p>Gdańsk</p>
            </div>

            <img src={myphoto} />

            <div className="skills">
              <h2>Skills</h2>
              <hr></hr>
              <p>React.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
