import './styles.css';
import React from 'react';

export const CssBoxModel = () => {
  return (
    <>
      <p id="unique-id-box-model">Ćwiczenia z HTML & CSS - CSSBoxModel</p>
      <div className="parent-box-model">
        <p id="unique-id-box-model">Ćwiczenia z HTML & CSS - CSSBoxModel</p>
        <p id="unique-id-box-model">Ćwiczenia z HTML & CSS - CSSBoxModel</p>
      </div>
      <a href="">Kotwica</a>
      <input type="text" />
      <img src="" alt="" />
      <h1></h1>
      <button></button>

      <div className="display-css-test">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
      <div className="display-css-test">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>

      <div className="box-sizing-container">
        <div className="content-box-example">1</div>
        <div className="border-box-example">2</div>
      </div>

      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          voluptate iste recusandae quae doloremque error molestias, laudantium
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, obcaecati voluptatem quaerat qui unde sed hic eius beatae
          illo repellat reprehenderit dolor quas et repudiandae mollitia facere
          suscipit tempore reiciendis?
        </div>
      </div>
      <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime neque nostrum quaerat facilis earum. Iusto deserunt
          reprehenderit quaerat quos? Ipsam, sint architecto corporis blanditiis
          vero quisquam modi ducimus nam.
        </div>
      </div>
    </>
  );
};
