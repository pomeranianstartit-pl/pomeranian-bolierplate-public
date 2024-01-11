import { useState } from 'react';
import { Button } from '../Button/Button';
export const SelectButtons = ({ options, setValue }) => {
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value_change) => {
    setValue(value_change);

    setNewOptions(
      newOptions.map((option) => ({
        ...option,
        isActive: option.value === value_change ? true : false,
      }))
    );
  };

  return (
    <div>
      {newOptions.map(({ value, isActive, content }) => {
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
