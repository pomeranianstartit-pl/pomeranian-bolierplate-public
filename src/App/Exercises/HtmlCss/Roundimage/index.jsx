import './styles.css';

import png from '../../../Images/example-png.png';
import gif from '../../../Images/example_gif.gif';
import jpg from '../../../Images/example-jpg.jpg';
import { Roundimage } from '../../../Components/Roundimage/Roundimage.jsx';

export function ExerciseImages() {
  const images = [
    { title: 'to jest png!', src: png, height: 100, width: 100, color: 'red' },

    {
      title: 'to jest gif!',
      src: gif,
      height: 100,
      width: 100,
      color: 'green',
    },

    {
      title: 'to jest jpg!',
      src: jpg,
      height: 100,
      width: 100,
      color: 'yellow',
    },
  ];

return (
  <div>
    {images.map((el) => (
      <Roundimage
        title={el.title}
        width={el.width}
        height={el.height}
        color={el.color}
      />
    ))}
  </div>
);
}
