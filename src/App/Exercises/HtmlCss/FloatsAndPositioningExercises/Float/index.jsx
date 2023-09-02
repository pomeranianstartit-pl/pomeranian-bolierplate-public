import image from './image.jpeg';

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
      </div>
      <div className="float_layout clearfix">
        <div className="float-layout-left">float left</div>
        <div className="float-layout-right">float right</div>
        <div className="float-layout-footer ">footer</div>
      </div>
    </div>
  );
};
