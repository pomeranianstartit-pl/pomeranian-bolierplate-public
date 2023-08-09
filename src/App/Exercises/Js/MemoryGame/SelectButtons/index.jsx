import { Button } from '../Button';
import './styles.css';
import { useState } from 'react';

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
      {newOptions.map((element) => (
        <div className="select-button">
          <Button
            onClick={() => handleClick(element.value)}
            isActive={element.isActive}
          >
            {element.content}{' '}
          </Button>
        </div>
      ))}
    </>
  );
};
