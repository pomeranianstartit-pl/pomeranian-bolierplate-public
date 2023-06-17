import './SelectButtonMemo.css';
import {Button} from '../Button/Button'
import { useState } from 'react';




export const SelectButtonMemo = (props) => {
  const { options, setValue} = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setValue(value)
   setNewOptions(newOptions.map((option) => {
      return {
        ...option,
        isActive: option.value === value? true : false,
    }
  }));

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