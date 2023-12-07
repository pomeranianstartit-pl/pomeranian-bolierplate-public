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
      {newOptions.map(({ isActive, content, value }) => (
        <Button
          key={value}
          isActive={isActive}
          onClick={() => {
            handleClick(value);
          }}
        >
          {content}
        </Button>
      ))}
    </div>
  );
};
