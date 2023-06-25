import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButton = (props) => {
  const { options } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    const updatedOptions = newOptions.map((option) => {
      return {
        ...option,
        isActive: option.value === value,
      };
    });
    setNewOptions(updatedOptions);
  };

  return (
    <>
      {newOptions.map(({ value, isActive, label }) => (
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