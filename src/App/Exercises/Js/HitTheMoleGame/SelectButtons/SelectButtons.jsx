import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  const { options } = props;
  const { newOptions, setNewOptions } = useState(options);

  const handleClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };

  return (
    <>
      {options.map(({ value, isActive, label }) => (
        <Button
          onClick={() => handleClick(value)}
          key={value}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
