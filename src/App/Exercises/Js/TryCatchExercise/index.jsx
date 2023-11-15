import { useState } from 'react';

//   try {} catch (error) {} finally {}
export const TryCatchExercise = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    try {
      const parsedValue = parseInt(value);

      if (isNaN(parsedValue)) {
        throw new Error('To nie jest liczba');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setError(null);
    const { value } = e.target;
    setInputValue(value);
    if (value.length > 0) {
      validate(value);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {error && <div>{error}</div>}
    </div>
  );
};
