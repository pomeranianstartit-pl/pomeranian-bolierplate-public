import { useState } from 'react';

export const useFormInputs = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
    // console.log('event name', inputs);
    // console.log('event values', value);
  };
  return [inputs, handleInputChange];
};
