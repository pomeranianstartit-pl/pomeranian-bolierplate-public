import {
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Stack,
} from '@mui/material';
import './styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export function MaterialUI() {
//   const [value, setValue] = React.useState.number | (null > 2);
  return (
    <div>
      <p>material ui</p>
      <div className="button-box">
        <Button variant="text">Hello world</Button>
        <Button variant="contained" color="success">
          Hello world
        </Button>
        <Button variant="outlined" color="success">
          Hello world
        </Button>
      </div>
      <p></p>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <p></p>
      <Stack direction="row" spacing={5}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success" endIcon={<DeleteIcon />}>
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <p></p>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel
          required
          control={<Checkbox defaultChecked />}
          label="Required"
        />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <p>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab size="large" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab size="small" disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>
      </p>
      <p></p>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <p></p>
      <div>
        {/* <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box> */}
      </div>
    </div>
  );
}

// export function MaterialUI() {
//   const images = [
//     {
//       url: '/static/images/buttons/breakfast.jpg',
//       title: 'Breakfast',
//       width: '40%',
//     },
//     {
//       url: '/static/images/buttons/burgers.jpg',
//       title: 'Burgers',
//       width: '30%',
//     },
//     {
//       url: '/static/images/buttons/camera.jpg',
//       title: 'Camera',
//       width: '30%',
//     },
//   ];

//   const ImageButton = styled(ButtonBase)(({ theme }) => ({
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('sm')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &.Mui-focusVisible': {
//       zIndex: 1,
//       '& .MuiImageBackdrop-root': {
//         opacity: 0.15,
//       },
//       '& .MuiImageMarked-root': {
//         opacity: 0,
//       },
//       '& .MuiTypography-root': {
//         border: '4px solid currentColor',
//       },
//     },
//   }));

//   const ImageSrc = styled('span')({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   });

//   const Image = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   }));

//   const ImageBackdrop = styled('span')(({ theme }) => ({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   }));

//   const ImageMarked = styled('span')(({ theme }) => ({
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   }));

//   return (
//     <Box
//       sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
//     >
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }
