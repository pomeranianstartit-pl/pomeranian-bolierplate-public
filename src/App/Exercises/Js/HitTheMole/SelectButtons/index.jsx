import { useState } from 'react';
import { Button } from '../Button';

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
        <Button
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
