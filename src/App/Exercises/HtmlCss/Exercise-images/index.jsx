import './styles.css';
import png from '../../../Images/example-png.png';
import gif from '../../../Images/example_gif.gif';
import jpg from '../../../Images/example-jpg.jpg';

export function ExerciseImages() {
  return <div>
    <img src={png} alt=""/>
    <img src={gif} alt=""/>
    <img src={jpg} alt=""/>

    {/* backgrounf url */}
    <div className='imageBackground'></div>
  </div>;
}
