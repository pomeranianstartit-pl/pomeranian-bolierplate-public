import './styles.css';

export const ExerciseBoxModel = () => {
  return (
    <>
      <h1 className="cssboxmodel">CSS Box Model</h1>
      <hr />
      <div className="parent-box-model">
        <p>ćwiczenie 1</p>
        <p>ćwiczenie 2</p>
      </div>
      <p id="id-p">ćwiczenie 3</p>

      <a href="?">kotwica</a>
      <input type="text" />
      <img src="" alt="" />
      <h1>ddhjfcjhngtfhjjh</h1>
      <button>button</button>
      <div className="dispaly-css-test">Lorem ipsum 1</div>
      <div className="dispaly-css-test">Lorem ipsum 2</div>
      <hr />
      {/*/////////////////////////////BoxSizing///////////////////////////*/}
      <div className="box-sizing-conteiner">
        <div className="content-box-example">1</div>
        <div className="border-box-example">2</div>
      </div>
      {/*/////////////////////////////Css property overflow///////////////////////////*/}
      <div className="overflow-conteiner">
        <div className="overflow-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur ultrices est sed interdum ultrices.
          Pellentesque efficitur tellus et est varius efficitur.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Curabitur ultrices est
          sed interdum ultrices. Pellentesque efficitur tellus et est varius
          efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur ultrices est sed interdum ultrices. Pellentesque efficitur
          tellus et est varius efficitur.
        </div>
      </div>
    </>
  );
};
