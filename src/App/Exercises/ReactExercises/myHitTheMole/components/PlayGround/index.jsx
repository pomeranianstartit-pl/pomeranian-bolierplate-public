import { NUMBER_OF_FIELDS } from '../../defaultSettings';
import MolePicture from '../pictures/mole_picture.svg';
import './styles.css';

import { useState } from 'react';
import { generatePlayFields } from '../../helper';

export const Playground = ({ molePosition }) => {
  const [playFields, setPlayFields] = useState(
    generatePlayFields(NUMBER_OF_FIELDS)
  );
  const handleFieldClick = () => {};
  console.log(playFields, 'tu jest playfields');
  console.log('mole position', molePosition);
  return (
    <div className="mole--map">
      {playFields.map(({ id, hasClicked }) => {
        const isMolePresent = () => {};
        return (
          <div
            key={id}
            onClick={() => handleFieldClick(id, isMolePresent)}
            className="mole--square"
          >
            {molePosition === id && (
              <img src={MolePicture} alt="mole is here" />
            )}
          </div>
        );
      })}
    </div>
  );
};
