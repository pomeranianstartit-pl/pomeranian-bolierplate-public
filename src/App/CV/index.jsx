import './styles.css';

export const CV = () => {
  return (
    <div className="CV">
      <div className="cv-main-section">
        <div className="cv-header">
          <h2>MOJE CV</h2>
          <p>Poniżej znajdziesz informacje na temat mojego wykształcenia</p>
        </div>
        <div className="cv-experience"></div>
      </div>
      <div className="cv-profile-section">
        <div className="cv-profile"></div>
        <div className="cv-skills"></div>
      </div>
    </div>
  );
};
