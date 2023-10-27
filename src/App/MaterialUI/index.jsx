import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

export function MaterialUI() {
  return (
    <>
      <h1>MaterialUI</h1>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>

      <div className="stars">
        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
      </div>
    </>
  );
}
