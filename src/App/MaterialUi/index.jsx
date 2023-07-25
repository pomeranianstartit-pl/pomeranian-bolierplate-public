import './styles.css';
import Button from '@mui/material/Button';
import BackHandIcon from '@mui/icons-material/BackHand';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import IconButton from '@mui/material/IconButton';

export const MaterialUi = () => {
  return (
    <div className="Meterial-box">
      <Button variant="contained">Hello World</Button>
      <Button
        variant="outlined"
        color="error"
        size="large"
        startIcon={<BackHandIcon />}
      >
        error
      </Button>
      <IconButton color="success" aria-label="done">
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
};
