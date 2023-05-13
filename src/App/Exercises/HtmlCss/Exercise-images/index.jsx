import './styles.css';

import jpg from '../../../Images/jpg.jpg';
import avif from '../../../Images/avif.avif';

export function ExerciseImages() {
  return <div>
    <img className="jpg" src={jpg} alt="tu był jpg" />;
    <img src={avif} alt="tu był avif" />;

    <div className="imgbackground">

    </div>

  </div>;
}


