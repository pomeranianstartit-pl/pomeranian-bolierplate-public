import './styles.css';

export function BoxModel() {
  return (
    <>
      <div className="display-css-test">
        <p>Paragraf 3</p>
      </div>
      <div className="parent-box-model">
        <div className="display-css-test">
          <p id="unique-id-box-model" className="class-box-model">
            Paragraf 1
          </p>
        </div>
        <div className="display-css-test">
          <p>Paragraf 2</p>
        </div>
      </div>
      {/*////////////////////Box sizing vs Border Box////////////////// */}
      <div className="box-sizing-container">
        <div className="content-box-example"> CONTENT BOX</div>
        <div className="border-box-example">BORDER BOX</div>
      </div>
      {/* //////////////CSS PROPERTY OVERFLOW///////////// */}
      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur.
        </div>
      </div>
      <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur.
        </div>
      </div>
    </>
  );
}
