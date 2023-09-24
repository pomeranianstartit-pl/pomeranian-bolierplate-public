import './styles.css';

import png from '../../../Images/pikachu.png'
import jpg from '../../../Images/tiger.jpg'
import gif from '../../../Images/panda.gif'

export function ExerciseImages() {
  return (
    <div>
      <img src={png} alt="Pikachu" />
      <img src={jpg} alt="tygrys" />
      <img src={gif} alt="panda" />

      {/* background */}
      <div className='imageBackground'>TEST</div>
    </div>
  )
}
