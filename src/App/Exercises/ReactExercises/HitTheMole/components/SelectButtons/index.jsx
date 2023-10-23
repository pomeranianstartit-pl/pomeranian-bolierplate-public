import { useState } from 'react';

import { Button } from '../Button';

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
    <div>
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
