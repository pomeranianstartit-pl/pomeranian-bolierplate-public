import './styles.css';

import png from '../../../Images/nyan-cat-image.png'
import jpg from '../../../Images/cat-image.jpg'
import gif from '../../../Images/skeleton-dancing-image.gif'

export function ExerciseImages() {
  return (
    <div>
      <p>Ćwiczenia z HTML & CSS - IMAGES</p>
      <img src={png} alt="nyan cat" />
      <img src={jpg} alt="koty chmurki" />
      <img src={gif} alt="tańczący szkieletor" />
    </div>
  )
}
