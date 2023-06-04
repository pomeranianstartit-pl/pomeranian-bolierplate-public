import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';

export const SelectButtons = (props) => {
  const { options, setOptionChosen, setInitialTime } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value ? true : false,
        };
      })
    );

    const chosenOption = newOptions.find((option) => option.value === value);

    setOptionChosen(chosenOption.value * 60);
    setInitialTime(chosenOption.value * 60);
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
