import image from './image.jpg';

import './styles.css';

export const Float = () => {
  return (
    <div>
      <div className="float__image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sequi veniam ea enim nesciunt doloremque delectus sint consectetur qui
          magnam. Recusandae, hic quidem officia, asperiores sit libero sapiente
          totam eum.
        </p>
        <img src={image} alt="Morze" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sequi veniam ea enim nesciunt doloremque delectus sint consectetur qui
          magnam. Recusandae, hic quidem officia, asperiores sit libero sapiente
          totam eum.
        </div>
        <div className="float__layout clearfix">
          <div className="float__layout-left">Float left</div>

          <div className="float__layout-right">Float right</div>

          <div className="float__layout-footer">footer</div>
        </div>
      </div>
    </div>
  );
};
