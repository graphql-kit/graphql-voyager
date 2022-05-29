import { createTheme } from '@mui/material/styles';
import { cyan, yellow } from '@mui/material/colors'

import variables from './variables.css';

export const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: yellow,
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: '30px',
          height: '15px',
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: variables.iconsSize,
          height: variables.iconSize,
          padding: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: variables.baseFontSize - 2,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginBottomLeft: {
          [variables.bigViewport]: {
            left: '340px',
            right: '20px',
            bottom: '20px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select:{padding: '3px 3px 3px 10px'},
      }
      
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          width: '50%',
          backgroundColor: variables.alertColor,
        },
      },
    },
  },
});
