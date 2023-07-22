import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';
<img src={snowWolf} alt="Snow wolf" className="snow-wolf" />;
export const FloatsAndPositioningExercises = () => {
  return (
    <div className="container">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </p>
      <p className="float-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="p-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis urna vitae porta aliquam. Pellentesque sed libero in odio
        volutpat lobortis in sed arcu. Nulla vel cursus risus, ac gravida
        mauris. Maecenas accumsan lacinia libero eget fermentum. Maecenas
        sodales nisl in aliquam varius. Praesent nunc mi, pellentesque non
        elementum vel, vestibulum ac felis. Pellentesque convallis lectus et
        mattis dignissim. Cras pellentesque lorem leo,
      </p>
      <div className="float-container">
        <p className="p-pink">
          <img src={snowWolf} alt="Snow wolf" className="snow-wolf" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          iaculis urna vitae porta aliquam. Pellentesque sed libero in odio
          volutpat lobortis in sed arcu. Nulla vel cursus risus, ac gravida
          mauris. Maecenas accumsan lacinia libero eget fermentum. Maecenas
          sodales nisl in aliquam varius. Praesent nunc mi, pellentesque non
          elementum vel, vestibulum ac felis. Pellentesque convallis lectus et
          mattis dignissim. Cras pellentesque lorem leo,
        </p>
      </div>
      <p className="p-float-save">zapisz na później</p>
      <p className="p-grey dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis urna vitae porta aliquam. Pellentesque sed libero in odio
        volutpat lobortis in sed arcu. Nulla vel cursus risus, ac gravida
        mauris. Maecenas accumsan lacinia libero eget fermentum. Maecenas
        sodales nisl in aliquam varius. Praesent nunc mi, pellentesque non
        elementum vel, vestibulum ac felis. Pellentesque convallis lectus et
        mattis dignissim. Cras pellentesque lorem leo,
      </p>
      <div className="save">zapisz na później</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis urna vitae porta aliquam. Pellentesque sed libero in odio
        volutpat lobortis in sed arcu. Nulla vel cursus risus, ac gravida
        mauris. Maecenas accumsan lacinia libero eget fermentum. Maecenas
        sodales nisl in aliquam varius. Praesent nunc mi, pellentesque non
        elementum vel, vestibulum ac felis. Pellentesque convallis lectus et
        mattis dignissim. Cras pellentesque lorem leo,
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis urna vitae porta aliquam. Pellentesque sed libero in odio
        volutpat lobortis in sed arcu. Nulla vel cursus risus, ac gravida
        mauris. Maecenas accumsan lacinia libero eget fermentum. Maecenas
        sodales nisl in aliquam varius. Praesent nunc mi, pellentesque non
        elementum vel, vestibulum ac felis. Pellentesque convallis lectus et
        mattis dignissim. Cras pellentesque lorem leo,
      </p>
      <div className="squares-container">
        <div className="square s-1"></div>
        <div className="square s-2"></div>
        <div className="square s-3"></div>
      </div>
    </div>
  );
};
