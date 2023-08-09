import { Button } from '../Button';
import './styles.css';

import { useState } from 'react';

export const SelectButtons = (props) => {
  const { options, setValue } = props;
  const [modifiedOptions, setModifiedOptions] = useState(options);

  const handleClick = (value) => {
    setValue(value);
    setModifiedOptions(
      modifiedOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };

  return (
    <>
      {modifiedOptions.map(({ value, label, isActive }) => (
        <div className="select-button">
          <Button
            key={value}
            onClick={() => handleClick(value)}
            isActive={isActive}
          >
            {label}
          </Button>
        </div>
      ))}
    </>
  );
};
