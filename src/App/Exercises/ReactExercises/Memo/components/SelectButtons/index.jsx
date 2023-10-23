import { useState } from 'react';

import { Button } from '../Button';

export const SelectButtons = ({ setValue, options = [] }) => {
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setValue(value);
    setNewOptions(
      newOptions.map((option) => ({
        ...option,
        isActive: option.value === value,
      }))
    );
  };

  return (
    <>
      {newOptions.map(({ isActive, label, value }) => {
        return (
          <Button onClick={() => handleClick(value)} isActive={isActive}>
            {label}
          </Button>
        );
      })}
    </>
  );
};
