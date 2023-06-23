import React from 'react';
import './styles.css';
import snowdog from './snowdog.jpg';

const FigmaFloatDesign = () => {
  return (
    <div className="blog">
      <div className="text1">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          nulla quia delectus maiores facere, quae veritatis quos ea dolore
          perspiciatis!
        </p>
        <div className="container-pink">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            culpa excepturi officiis!
          </p>
        </div>
        <div className="container-grey">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nesciunt commodi dolorem omnis alias ab quidem minima velit
            deserunt, delectus ex fugit? Laudantium perspiciatis harum
            distinctio. Rerum placeat magnam accusamus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facilis ad nihil asperiores
            necessitatibus, neque est explicabo nobis et molestias magni!
          </p>
        </div>
        <div className="save">
          <p>zapisz na później</p>
        </div>
        <div className="container-3">
          <img src={snowdog} alt="pies na śniegu" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas a
            ducimus quod officiis minima atque quo quisquam veritatis
            reprehenderit dolore. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Praesentium dignissimos, quae iste adipisci soluta
            earum.
          </p>
        </div>
        <button className="save-me">zapisz na później</button>
        <div className="text6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          doloremque sed sequi adipisci animi nam aliquid laudantium.
          Repellendus vitae debitis esse quasi eligendi soluta autem veritatis,
          nobis quaerat praesentium consectetur voluptates laboriosam.
          Temporibus, error fugiat repudiandae dolorem commodi corrupti modi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem itaque
          aut impedit inventore saepe et optio temporibus consequatur,
          reiciendis adipisci culpa officiis aperiam suscipit repellendus
          recusandae illum aliquid iusto consequuntur tenetur ut ipsum beatae
          quo? Dignissimos similique iste consequuntur quia.
        </div>
      </div>
    </div>
  );
};

export default FigmaFloatDesign;
