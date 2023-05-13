import { RoundImage } from '../../../Components/RoundImage/RoundImage';
import './styles.css';
/*tutaj zaimportuj obrazy === import jpg from'../../*/
export function ExerciseImages() {
const images = [
{
  title: 'to jest jpg',
  src: jpg,
  width: 50,
  height: 50,
  color: 'red',
},
{
  title: 'to jest png',
  src: png,
  width: 50,
  height: 50,
  color: 'red',
},
]
  return (
  <div>
    {images.map((el) => (
      <RoundImage
      title={el.title}
      src={el.src}
      width={el.width}
      heigh={el.heigh}
      color={el.color}
      />
    ))}
  </div>;
  );
}
