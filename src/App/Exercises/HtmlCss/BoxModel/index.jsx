import './styles.css';

export const BoxModel = () => {
  return (
    <>
      <p id="unique-box-model" className="class-box-model">
        {' '}
        3. Ćwiczenia z HTML & CSS - CSSBoxModel
      </p>
      <div className="parent-box-model">
        <p className="class-box-model">
          1. Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
        <p className="class-box-model">
          2. Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
      </div>

      {/* //najczęściej wykorzystywane tagi
      
        <a href="">Kotwica</a>
        <input type="text" />
        <img src="" alt="" />
        <h1></h1>
        <button>Kliknij mnie!</button>
       */}

      <div className="display-css-test">Lorem, ipsum dolor. 1</div>
      <div className="display-css-test">Lorem, ipsum dolor. 2</div>

      {/* ///////////////Box Sizing vs Border Box//////////////// */}

      <div className="box-sizing-container">
        <div className="content-box-example">1</div>
        <div className="border-box-example">2</div>
      </div>

      {/* /////////////////CSS property overflow//////////////// */}

      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt aliquam atque adipisci, id in nemo nostrum
          quam. Optio labore mollitia odio repudiandae neque explicabo
          accusamus, exercitationem iste. Aut, sapiente enim.
        </div>
      </div>

       {/* /////////////////CSS units//////////////// */}

       <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ultrices est sed interdum ultrices. Pellentesque efficitur tellus et
          est varius efficitur.
        </div>
      </div>

      
    </>
  );
};
