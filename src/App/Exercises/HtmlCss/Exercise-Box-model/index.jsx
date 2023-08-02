import './styles.css';

export function CSSBoxModel() {
  return (
    <>
    <p id="unique-id-box-model" className='class-box-model'>
      {' '}
    3 Ćwiczenia z HTML & CSS - CSSBoxModel
    </p>

    <div className="parent-box-model">
      <p className="class-box-model">
        1 Ćwiczenia z HTML & CSS - CSSBoxModel
      </p>
      <p className="class-box-model">
        {' '}
        2 Ćwiczenia z HTML & CSS - CSSBoxModel
      </p>
    </div>

    <a href="">Kotwica</a>
    <input type="text" />
    <img src="" alt="" />
    <h1></h1>
    <button></button>

    <div className='display-css-test'>Lorem ipsum dolor 1</div>
    <div className='display-css-test'>Lorem ipsum dolor 1</div>

    {/* ////////////Box sizing vs Border Box /////////// */}

    <div className="box-sizing-conteiner">
      <div className="content-box-example">1</div>
      <div className="border-box-example">1</div>
    </div>

    {/* ////////////CSS property overflow /////////// */}

    <div className='overflow content'>
      <div className='overflow content'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices est sed interdum ultrices. Pellentesque efficitur tellus et est varius efficitur.</p>
      </div>
    </div>

    {/* ////////////CSS units /////////// */}

    <div className='units-content'>
      <div className='units-content'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices est sed interdum ultrices. Pellentesque efficitur tellus et est varius efficitur.</p>
      </div>
    </div>

    </>
  );
}
