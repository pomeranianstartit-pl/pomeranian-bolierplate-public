import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Material = () => {
  return (
    <>
      <div>
        <h1>Material</h1>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
