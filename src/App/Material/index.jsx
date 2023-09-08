// import './styles.css';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormLabel from '@mui/material/FormLabel';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

// export default function CheckboxLabels() {
//   return (
//     <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//       <FormControlLabel required control={<Checkbox />} label="Required" />
//       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//     </FormGroup>
//   );
// }

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// export default function IconCheckboxes() {
//   return (
//     <div>
//       <Checkbox
//         {...label}
//         icon={<FavoriteBorder />}
//         checkedIcon={<Favorite />}
//       />
//       <Checkbox
//         {...label}
//         icon={<BookmarkBorderIcon />}
//         checkedIcon={<BookmarkIcon />}
//       />
//     </div>
//   );
// }

// export default function ErrorRadios() {
//   const [value, setValue] = useState('');
//   const [error, setError] = useState(false);
//   const [helperText, setHelperText] = useState('Choose wisely');

//   const handleRadioChange = (event) => {
//     setValue(event.target.value);
//     setHelperText(' ');
//     setError(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (value === 'best') {
//       setHelperText('You got it!');
//       setError(false);
//     } else if (value === 'worst') {
//       setHelperText('Sorry, wrong answer!');
//       setError(true);
//     } else {
//       setHelperText('Please select an option.');
//       setError(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormControl sx={{ m: 3 }} error={error} variant="standard">
//         <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-error-radios"
//           name="quiz"
//           value={value}
//           onChange={handleRadioChange}
//         >
//           <FormControlLabel
//             value="best"
//             control={<Radio />}
//             label="The best!"
//           />
//           <FormControlLabel
//             value="worst"
//             control={<Radio />}
//             label="The worst."
//           />
//         </RadioGroup>
//         <FormHelperText>{helperText}</FormHelperText>
//         <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
//           Check Answer
//         </Button>
//       </FormControl>
//     </form>
//   );
// }

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

export const Material = () => {
  return (
    <div>
      <div className="buttony">
        <h1>Material</h1>
        <div>
          <Button variant="contained">Hello world</Button>
        </div>
        <div>
          <Button variant="text">Text</Button>
        </div>
        <div>
          <Button href="#text-buttons">Link</Button>
        </div>
        <div>
          <Button variant="contained" disabled>
            BRAK
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              alert('clicked');
            }}
          >
            Click me
          </Button>
        </div>
        <div>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
        <div>
          <Button variant="contained" size="small">
            Small
          </Button>
        </div>
        <div>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
        </div>
        <div>
          <Stack direction="row" spacing={3}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </div>
        <div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton aria-label="delete" size="small">
              {/* <DeleteIcon fontSize="inherit" /> */}
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              {/* <DeleteIcon fontSize="inherit" /> */}
            </IconButton>
          </Stack>
        </div>
        <div>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary">
              <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
              <Fingerprint />
            </IconButton>
          </Stack>
        </div>
      </div>
      <div className="checkboxes">
        {/* <div>{CheckboxLabels()}</div> */}
        {/* <div>{IconCheckboxes()}</div> */}
      </div>
      {/* <div className="radioButtons-quiz">{ErrorRadios()}</div> */}
      <div className="rating">{HoverRating()}</div>
    </div>
  );
};
