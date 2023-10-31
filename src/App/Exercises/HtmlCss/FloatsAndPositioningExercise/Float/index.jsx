import image from './sea1.jpg';
import './styles.css';

export const Float = () => {
  return (
    <div>
      <div className="float_wrapper">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
          libero, eius veniam nostrum praesentium voluptates optio, molestiae
          doloremque aperiam perspiciatis nam ipsum cumque nesciunt dolor sint
          rem ab dolorum suscipit impedit quam? Commodi nesciunt tempora,
          aliquam sapiente consequatur facilis.
        </p>
        <img src={image} alt="morze" />
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
          libero, eius veniam nostrum praesentium voluptates optio, molestiae
          doloremque aperiam perspiciatis nam ipsum cumque nesciunt dolor sint
          rem ab dolorum suscipit impedit quam? Commodi nesciunt tempora,
          aliquam sapiente consequatur facilis.
        </div>
      </div>
      <div className="float_layout_clerfix">
        <div>Float left</div>
        <div>Float right</div>
        <div>footer</div>
      </div>
    </div>
  );
};
