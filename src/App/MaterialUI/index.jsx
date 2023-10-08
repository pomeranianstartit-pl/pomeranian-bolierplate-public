import './styles.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function MaterialUI() {
  const listColor = ['black', 'red'];
  const [rectColor, setRectColor] = useState('black');

  function addLog() {
    console.log('clicked button hello world');
  }
  return (
    <div className="materialUI">
      <h3>Material UI</h3>

      <Button onClick={addLog} variant="contained">
        Hello world
      </Button>
      <p className="marginTop">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          onChange={(event, newValue) => {
            console.log(newValue);
            setRectColor(newValue);
          }}
          options={listColor}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Color" />}
        />
      </p>
      {rectColor == 'red' && <p className="marginTop sampleRedRect"></p>}
      {rectColor == 'black' && (
        <p className="marginTop sampleRedRect sampleBlackRect"></p>
      )}
    </div>
  );
}
