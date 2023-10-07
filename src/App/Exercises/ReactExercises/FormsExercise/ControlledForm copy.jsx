import { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object({
  inputValue: yup.string().length(4, 'Maks. 4 znaki'),
});

export const ControlledForms = () => {
  const [inputValue, setInputValue] = useState('');
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(`Input.value: ${inputValue}`);
    console.log('Form submitted!');
    schema
      .validate({ inputValue })
      .then((data) => console.log(data))
      .catch(console.log);
  };

  const validationResult = schema.isValidSync(inputValue);
  console.log(validationResult);

  return (
    <div>
      <h2>Controlled form</h2>
      <form onSubmit={handleOnSubmit}></form>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </div>
  );
};
