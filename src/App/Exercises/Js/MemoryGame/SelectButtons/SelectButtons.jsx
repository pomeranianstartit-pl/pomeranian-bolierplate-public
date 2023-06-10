import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  const { options, setValue } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setValue(value);
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
