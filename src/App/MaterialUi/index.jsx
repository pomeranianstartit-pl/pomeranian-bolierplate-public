import './styles.css';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffa726',
    },
  },
});

export function MaterialUi() {
  return (
    <div>
      <div>
        <h1>Material UI</h1>

        <p></p>
      </div>

      <div className="Buttons">
        <ThemeProvider theme={theme}>
          <Button className="Button-1" variant="outlined">
            Don't Click Me
          </Button>

          <Button className="Button-2" variant="contained" color="secondary">
            Click Me
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
