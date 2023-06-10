import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';

export const SelectButtonsMemo = (props) => {
  const { options, setValue } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setValue(value)
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value ? true : false,
        };
      })
    );
    
  };

  return (
    <>
      {newOptions.map(({ value, isActive, content }) => (
        <Button
          onClick={() => handleClick(value)}
          key={value}
          isActive={isActive}
        >
          {content}
        </Button>
      ))}
    </>
  );
};
