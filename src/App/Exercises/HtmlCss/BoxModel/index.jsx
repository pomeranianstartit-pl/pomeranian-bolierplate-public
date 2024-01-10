import './style.css';

export function BoxModel() {
  return (
    <div>
      <h2>Właściwość box sizing, overflow oraz gradient.</h2>
      <p>
        Właściwość box-sizing pozwala na to czy padding oraz marginesy będą
        liczone z szerokością boxa czy nie.
        <ul>
          <li>
            'box-sizing:border-box"- tutaj szerokość zawiera w sobie padding i
            border.
          </li>
          <li>
            'box-sizing:content-box'-tutaj do szerokości dodawany jest padding
            oraz border
          </li>
        </ul>
        <p>
          Właśćiwość overflow określa czy zawartość przyciąć, czy dodać paski
          przewijania, oraz czy zawartość zmieści się w danym obszarze.
        </p>
        <ul>
          <li>
            'overflow:hidden'- schowa tekst jeżeli będzie wystawać ponad box.
          </li>
          <li>'overflow:scroll'- pozwoli na skrolować dany kontent.</li>
        </ul>
      </p>
      <p>
        Gradient - można ustawić jako background. Gradient powinno stosować się
        dla elementów inline.(domyślnie span,a,img,input,button)
      </p>
      <div className="boxModel">
        <div className="div1">Kontent</div>
        <div className="div2"></div>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          assumenda debitis accusamus sed, odio ullam itaque quia maxime nulla
          consequatur perspiciatis dicta eos nemo ratione iste vero? Autem,
          officia voluptate.
        </span>
        <p className="p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ab quis iste omnis consequuntur suscipit mollitia
          accusantium magnam quae expedita, aliquid culpa, iusto quos vitae
          porro repellendus, sapiente corrupti quibusdam? Dignissimos similique
          quisquam aperiam quidem odit vel dolor tenetur reprehenderit? Ullam,
          enim? Recusandae, deserunt! Repellendus suscipit tempore, impedit,
          corporis consequatur reiciendis provident laborum facilis consectetur
          voluptate beatae modi quidem dolor. Eius aspernatur pariatur amet quia
          minus nihil odit at, dolores id accusamus eos beatae enim quam, ipsa
          dolorum alias sint omnis reprehenderit ut quidem? Culpa minima dolor
          ducimus accusamus ratione. Aliquam laborum voluptates enim sunt! Amet
          repellendus minima nemo quod asperiores doloremque, inventore cum sunt
          iure temporibus, earum non. Quidem fugit minus non laudantium enim
          deleniti est labore quae accusamus? Iste rem unde optio cum ducimus
          temporibus molestiae sapiente aut suscipit sequi velit ipsum nisi
          dolor excepturi necessitatibus voluptates, a totam amet. Cupiditate
          soluta debitis, officiis itaque optio impedit fugiat? Illum soluta
          quisquam minima nesciunt, quam reprehenderit non laboriosam unde
          maiores mollitia dolor a in ullam, esse atque officia at cumque eaque
          qui! Laudantium quod magnam iure nulla dolorem fuga! Ad facilis rerum
          mollitia, hic ipsa at laudantium vel veritatis eius nihil doloremque,
          molestias assumenda inventore excepturi quo! Iusto voluptate ad
          corporis, dolores porro minima dolore nulla delectus non expedita!
          Aliquid, iste voluptate quia iusto eligendi debitis necessitatibus,
          quas in tempore, suscipit qui nobis dolor. Unde quibusdam recusandae
          cumque repudiandae ea, perferendis atque ipsam odit nulla molestias,
          commodi, ut ad. Iusto molestias quos illo distinctio nulla autem, sed,
          voluptatem dignissimos voluptas architecto explicabo rerum iste rem
          aperiam modi nemo, atque fugiat quaerat aspernatur. Quis ab
          consequatur in, autem libero voluptas? Dolorum ipsum rerum excepturi
          ea fugit recusandae nobis voluptatibus modi nam? Debitis esse dolorem
          voluptatibus alias reiciendis, doloribus vero error incidunt pariatur.
          Autem animi temporibus ad nesciunt provident perferendis modi.
        </p>
      </div>
    </div>
  );
}
