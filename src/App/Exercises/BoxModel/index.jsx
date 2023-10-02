import './styles.css';

import './styles.css';

export function Exercise() {
  return (
    <div className="boxmodel-wrapper">
      <div className="firstDiv">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum.
      </div>

      <p className="firstP">
        lorem ipsum<div className="paragraphDiv">DIV W PARAGRAFIE</div> dolor
        sit amet
        <span className="paragraphSpan">
          SPAN W PARAGRAFIE
        </span> consectetur{' '}
        <strong className="paragraphStrong">POLSKA GUROM</strong> adipisicing
      </p>

      <div>
        {/* display: none */}

        <div className="displayNoneDiv">display: none</div>

        {/* conditional rendering */}

        {true && <div>wyświetlisz?</div>}
      </div>
    </div>
  );
}
