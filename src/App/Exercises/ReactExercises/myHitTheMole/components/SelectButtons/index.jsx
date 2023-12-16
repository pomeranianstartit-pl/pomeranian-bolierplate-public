import { useState } from 'react';
import { Button } from '../Button/index.jsx';
import './styles.css';

export const SelectButtons = ({ setValue, options }) => {
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
    <div className="select--buttons">
      {newOptions.map(({ isActive, isDisabled, content, value }) => (
        <Button
          key={value}
          isActive={isActive}
          isDisabled={isDisabled}
          onClick={() => {
            handleClick(value);
            console.log(value, 'new value has been set')
          }}
        >
          {content}
        </Button>
      ))}
    </div>
  );
};
