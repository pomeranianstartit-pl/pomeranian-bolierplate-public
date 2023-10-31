import sea from '../../../../Images/sea1.jpg';

import './styles.css';

export const Float = () => {
  return (
    <div className="float_image">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptas, minus magnam totam sequi iusto optio modi unde aspernatur ipsa
        rerum, aliquid dicta, temporibus quod eos accusantium at! Blanditiis
        quae delectus iste modi id magnam labore, sunt similique nesciunt quidem
        suscipit soluta deleniti quam iusto expedita, tempora porro, fugit illo
        possimus? Dolores laudantium voluptates accusantium dignissimos,
        sapiente nihil ipsam recusandae?
      </p>
      <img src={sea} alt="Morze" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non
        incidunt sit tempora placeat eos excepturi, impedit pariatur molestiae!
        Corporis laboriosam saepe, dolorem doloribus praesentium odit
        repellendus reprehenderit voluptate vel, voluptatibus soluta
        perspiciatis. Asperiores, explicabo possimus odio excepturi mollitia
        dolor atque provident, a doloribus praesentium neque dolore. Ipsum fugit
        ea voluptatum inventore animi, incidunt eveniet perferendis nihil
        aliquid vero quibusdam?
      </div>
      <div className="float_layout clearfix">
        <div className="float_layout_left">Float left</div>
        <div className="float_layout_right">Float right</div>
        <div className="float_layout_footer">footer</div>
      </div>
    </div>
  );
};
