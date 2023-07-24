import './styles.css';
import Button from '@mui/material/Button';

export const MaterialUi = () => {
  return (
    <div>
      <div className="material">
        <h1>Material UI</h1>
      </div>

      <div className="test">
        <Button variant="outlined" color="success">
          Test
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
    </div>
  );
};
