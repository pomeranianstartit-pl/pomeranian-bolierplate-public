import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://www.calmean.com/wp-content/uploads/2021/02/kotczykotka.jpg',
    title: 'Kotek',
    width: '40%',
  },
  {
    url: 'https://epoznan.pl/storage/gallery/104015/lqfwR2BAKdTu9Y9423cS5lrqaRj42xSE.jpg',
    title: 'Piesek',
    width: '30%',
  },
  {
    url: 'https://animalistka.pl/wp-content/uploads/2018/02/cow-1715829_1920.jpg',
    title: 'Krówka',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export function MaterialUI() {
  return (
    <>
      <h1>MaterialUI</h1>
      <div>
        <Button
          variant="contained"
          color="secondary"
          href="https://youtu.be/dQw4w9WgXcQ?feature=shared"
        >
          Never Gonna Give You Up
        </Button>
        <Button color="success" href="dashboard">
          Strona Główna
        </Button>
        <Button variant="contained" href="dashboard">
          Strona Główna
        </Button>
        <Button variant="outlined" size="large" href="dashboard">
          Strona Główna
        </Button>
        <Button
          color="error"
          size="small"
          onClick={() => {
            alert('clicked');
          }}
        >
          Click me
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <div>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              minWidth: 300,
              width: '100%',
            }}
          >
            {images.map((image) => (
              <ImageButton
                href="http://localhost:3000/material-ui/button-base-demo"
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
        </div>
      </div>
    </>
  );
}
