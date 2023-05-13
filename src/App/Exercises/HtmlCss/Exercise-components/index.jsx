import './styles.css';

import jpg from '../../../Images/obrazek_JPG.jpg';
import png from '../../../Images/obrazek_PNG.png';
import gif from '../../../Images/obrazek_GIF.gif';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ExerciseComponents() {
  const images = [
    {
    title: 'To jest png!',
    src: png,
    width: 50,
    height: 50,
    color: 'red',
    },
    {
    title: 'To jest jpg!',
    src: jpg,
    width: 150,
    height: 150,
    color: 'yellow',
    },
    {
    title: 'To jest gif!',
    src: gif,
    width: 250,
    height: 250,
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