import './styles.css';

import png from '../../../Images/nyan-cat-image.png'
import jpg from '../../../Images/cat-image.jpg'
import gif from '../../../Images/skeleton-dancing-image.gif'
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ExerciseImages() {
  const images = [
    {
      title: 'To jest png',
      src: png,
      width: 250,
      height: 250,
      color: 'red',
    },
    {
      title: 'To jest jpg',
      src: jpg,
      width: 250,
      height: 250,
      color: 'yellow',
    },
    {
      title: 'To jest gif',
      src: gif,
      width: 150,
      height: 150,
      color: 'black',
    },
  ];

  return (
    <div>
      {images.map((el) => (
        <RoundImage
          title={el.title}
          src={el.src}
          width={el.width}
          height={el.height}
          color={el.color}
        />
      ))}
    </div>
  );
}