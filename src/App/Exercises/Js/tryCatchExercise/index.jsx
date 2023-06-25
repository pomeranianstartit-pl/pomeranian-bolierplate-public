import React, { useState } from 'react';

export function TryCatchExercise() {
  const [value, setValue] = useState('');
  const [error, setError] = useState();
  

  const checkIsNumber = (value) => {
    const parsedValue = Number.parseInt(value);

    if (isNaN(parsedValue)) {
      throw new Error('Input nie jest liczbą!');
    }
  };

  const validate = (valueToValidate) => {
    try {
      checkIsNumber(valueToValidate);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nasz input:
          <input onChange={handleChange} value={value} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error && <div>Error: {error}</div>}
    </>
  );
}