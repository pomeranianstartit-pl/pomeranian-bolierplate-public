import './styles.css';

import jpg from '../../../Images/obrazek_JPG.jpg';
import png from '../../../Images/obrazek_PNG.png';
import gif from '../../../Images/obrazek_GIF.gif';

export function ExerciseImages() {
  return <div>
    <img src={jpg} alt="Example UFO" />
    <img src={png} alt="Example" />
    <img src={gif} alt="Example" />
  </div>;
}
