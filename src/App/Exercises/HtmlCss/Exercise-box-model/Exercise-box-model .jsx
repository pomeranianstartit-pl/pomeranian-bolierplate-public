import './styles.css';

export function ExerciseBoxModel() {
  return (
    <>
      <p id="uniqe-id-box-model3" className="className-box-model">
        Ćwiczenia z HTML & CSS - CSSBoxModel 3
      </p>
      <div className="parent-box-model">
        <p id="uniqe-id-box-model" className="className-box-model">
          Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
        <p id="uniqe-id-box-model2" className="className-box-model">
          Ćwiczenia z HTML & CSS - CSSBoxModel 2
        </p>
      </div>

      <div className="display-css-test">Lorem ipsum dolor sit amet</div>
      <div className="display-css-test">Lorem ipsum dolor sit amet</div>

      <div className="box-sizing-container">
        <div className="content-box-example">1</div>
        <div className="border-box-example">2</div>
      </div>
      {/* ////////////////CSS property overflow////////////////////// */}
      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur ultrices est sed interdum ultrices.
          Pellentesque efficitur tellus et est varius efficitur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Curabitur ultrices est
          sed interdum ultrices. Pellentesque efficitur tellus et est varius
          efficitur.
        </div>
      </div>
      {/* ////////////////CSS units////////////////////// */}
      <div className="units-container">
        <div className="units-content">Lorem ipsum dolor sit amet</div>
      </div>
    </>
  );
}
