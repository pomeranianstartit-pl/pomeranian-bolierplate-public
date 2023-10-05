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

      {/* BOX MODEL - box-sizing */}

      <div className="boxSizing">
        <div className="generalDiv div1"></div>

        <div className="generalDiv div2"></div>
      </div>

      <div className="overflow">
        <div className="overflowDiv firstOverflow">
          lorem ipsum dol sit amet lorem ipsum dol sit amet lorem ipsum dol sit
          amet lorem ipsum dol sit amet lorem ipsum dol sit ametlorem ipsum dol
          sit amet lorem ipsum dol sit amet lorem ipsum dol sit amet lorem ipsum
          dol sit amet lorem ipsum dol sit amet lorem ipsum dol sit amet
        </div>

        <div className="overflowDiv secondOverflow">
          lorem ipsum dol sit amet lorem ipsum dol sit amet lorem ipsum dol sit
          amet lorem ipsum dol sit amet lorem ipsum dol sit ametlorem ipsum dol
          sit amet lorem ipsum dol sit amet lorem ipsum dol sit amet lorem ipsum
          dol sit amet lorem ipsum dol sit amet lorem ipsum dol sit amet
        </div>
      </div>
    </div>
  );
}
