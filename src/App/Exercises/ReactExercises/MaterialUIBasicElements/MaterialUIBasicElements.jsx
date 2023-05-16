import './styles.css';
import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

import Slider from '@mui/material/Slider';

import { useEffect } from 'react';

// const PageLimitForm = () => {
//   const [amount, setAmount] = useState(0);

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">
//         Number of elements on page
//       </InputLabel>
//       <Select
//         labelId="pageElementLimit"
//         label="amount"
//         onChange={handleAmountChange}
//       >
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

const Sliders = () => {
  const [creditValue, setCreditValue] = useState(20000);
  const [creditDuration, setCreditDuration] = useState(24);
  const [creditRates, setCreditRates] = useState(0);
  const [error, setError] = useState('');

  const STEP_CREDIT_VALUE = 500;
  const MIN_CREDIT_VALUE = 20000;
  const MAX_CREDIT_VALUE = 120000;

  const STEP_CREDIT_DURATION = 1;
  const MIN_CREDIT_DURATION = 6;
  const MAX_CREDIT_DURATION = 48;

  const handleCreditValueChange = (event) => {
    setCreditValue(event.target.value);
    console.log(event.target.value);
  };

  const handleCreditDurationChange = (event) => {
    setCreditDuration(event.target.value);
    console.log(event.target.value);
  };

  const calculateRates = (creditValue, creditDuration) => {
    if (
      creditValue >= MIN_CREDIT_VALUE &&
      creditValue <= MAX_CREDIT_VALUE &&
      creditDuration >= MIN_CREDIT_DURATION &&
      creditDuration <= MAX_CREDIT_DURATION
    ) {
      setCreditRates(Math.ceil(creditValue / creditDuration));
      setError('');
    } else {
      setError('Value out of range');
    }
  };

  useEffect(() => {
    calculateRates(creditValue, creditDuration);
  }, [creditValue, creditDuration]);

  return (
    <>
      <Slider
        aria-label="selected-amount"
        value={creditValue}
        // getAriaValueText={}

        valueLabelDisplay="auto"
        step={STEP_CREDIT_VALUE}
        marks
        min={MIN_CREDIT_VALUE}
        max={MAX_CREDIT_VALUE}
        onChange={handleCreditValueChange}
      />
      <OutlinedInput
        type="number"
        onChange={handleCreditValueChange}
        value={creditValue}
      />
      <Slider
        aria-label="selected-duration"
        value={creditDuration}
        // getAriaValueText={}

        valueLabelDisplay="auto"
        step={STEP_CREDIT_DURATION}
        marks
        min={MIN_CREDIT_DURATION}
        max={MAX_CREDIT_DURATION}
        onChange={handleCreditDurationChange}
      />
      <OutlinedInput
        type="number"
        onChange={handleCreditDurationChange}
        value={creditDuration}
      />
      <div>Your current rate is {creditRates}</div>
      <div>{error ? error : null}</div>
    </>
  );
};

export function MaterialUIBasicElements() {
  const [name, setName] = useState();

  const handleClick = () => {
    console.log('Clicked');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Stack spacing={2} direction="row">
      <Sliders />
      {/* <OutlinedInput
        defaultValue={name}
        onChange={(event) => {
          console.log(event.target.value);
        }}
      /> */}
      {/* <OutlinedInput defaultValue={name} onChange={handleNameChange} /> */}

      <Button variant="outlined" onClick={handleClick}>
        Click me
      </Button>
    </Stack>
  );
}
