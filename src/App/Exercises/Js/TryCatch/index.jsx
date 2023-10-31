import { useState } from 'react';

//   try {} catch (error) {} finally {}
export const Exercise = () => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Nie dziel przez 0');
    }

    return a / b;
  };

  const handleClick = (x) => {
    setValue(null);
    try {
      console.log('try pierwsza operacja');
      setValue(divide(6, x));
      // jeżeli wystąpił bład to dalszy kod jest ignorowany
      console.log('try druga operacja');
    } catch (error) {
      console.log(error, 'error');
      setError(error.message);
    } finally {
      console.log('finally');
    }
  };

  return (
    <div>
      Dzielenie liczby
      <button onClick={() => handleClick(2)}>Dzielenie przez 2</button>
      <button onClick={() => handleClick(0)}>Dzielenie przez 0</button>
      {value && <div>{value}</div>}
      {error && <div>{error}</div>}
      <ValidateExercise />
    </div>
  );
};

// 1 wersja
// const ValidateExercise = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [error, setError] = useState(null);
  
//     const validate = (value) => {
//       try {
//         const parsedValue = parseInt(value);
  
//         if (isNaN(parsedValue)) {
//           throw new Error('To nie jest liczba');
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };
  
//     const handleChange = (e) => {
//       setError(null);
//       const { value } = e.target;
//       setInputValue(value);
//       if (value.length > 0) {
//         validate(value);
//       }
//     };
  
//     return (
//       <div>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         {error && <div>{error}</div>}
//       </div>
//     );
//   };


// 2 wersja

const ValidateExercise = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);
  
    const validate = (value) => {
      if (value.length === 0) return;
  
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
      validate(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        {error && <div>{error}</div>}
      </div>
    );
  };