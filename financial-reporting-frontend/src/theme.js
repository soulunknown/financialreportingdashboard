// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham, Arial, sans-serif',
    h4: {
      fontWeight: 'bold',
      textShadow: '0 0 10px orange',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#c6a367', // Darker gold color
    },
    secondary: {
      main: '#c6a367', // Faded gold color
    },
    background: {
      default: '#333', // Dark background
    },
    text: {
      primary: '#c6a367', // Gold text color
      secondary: '#999', // Muted gold color for secondary text
    },
  },
});

export default theme;

