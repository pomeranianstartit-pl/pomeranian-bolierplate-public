import { useState } from 'react';

import { Button } from '../Button';
import './styles.css';

export const SelectButtons = ({ options, setValue }) => {
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (val) => {
    setValue(val);

    setNewOptions(
      newOptions.map((option) => ({
        ...option,
        isActive: option.value === val ? true : false,
      }))
    );
  };

  return (
    <div className="button-inrow">
      {newOptions.map(({ value, content, isActive }) => {
        return (
          <Button
            key={value}
            isActive={isActive}
            onClick={() => handleClick(value)}
          >
            {content}
          </Button>
        );
      })}
    </div>
  );
};
