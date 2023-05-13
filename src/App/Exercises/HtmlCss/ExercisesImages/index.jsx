import './styles.css';

import png from './lotos.png';
import jpg from './lotos.jpg';
import gif from './fire-flames.gif';

export function ExerciseImages() {
  return (
    <div>
      <div>
        <img src={png} alt="zdjęcie kwiatu lotosu w formacie png" />
      </div>
      <div>
        <img src={jpg} alt="zdjęcie kwiatu lotosu w formacie jpg" />
      </div>
      <div>
        <img src={gif} alt="animacja ognia" />
      </div>
     
      {/* // background source url */}

      {/*0 cośwyszło zle i tyle - dlatego to poniżej wykomentowałem */}
      
      <div className="imageBackground">test</div>
      </div>
  
  
    

  );
}
