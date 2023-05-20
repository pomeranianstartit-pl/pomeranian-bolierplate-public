import './styles.css';
import jpg from '../../../Images/exercise-images-1.jpg';
import gif from '../../../Images/exercaise-image2.gif';
import { RoundImage } from '../../../Components/RoundImage/RoundImage'

export function ExerciseImages() {
 const images = [
  {
    title: 'to jest jpg',
    src: jpg,
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
  {
    title: 'to jest gif',
    src: gif,
    width: 250,
    height: 250,
    backgroundColor: 'black',
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
        margin={el.margin}
        />
    ))}
  </div>
);
}