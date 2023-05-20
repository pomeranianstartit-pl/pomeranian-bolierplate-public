import './styles.css';
import jpg from '../../../Images/exercise-images-1.jpg'
import gif from '../../../Images/exercaise-image2.gif'

export function ExerciseImages() {
  return (
    <div>
      <img src={jpg} alt="labadz" />
      <img src={gif} alt="example" />
      <div className="imageBackground"> </div>
    </div>
  )
}