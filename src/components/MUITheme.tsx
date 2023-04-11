import { cyan, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import variables from './variables.css';

declare module '@mui/material/styles' {
  interface Palette {
    logoColor: Palette['primary'];
    shadowColor: Palette['primary'];
  }
  interface PaletteOptions {
    logoColor: PaletteOptions['primary'];
    shadowColor: PaletteOptions['primary'];
  }

  interface Theme {
    panelSpacing?: string;
  }
  interface ThemeOptions {
    panelSpacing?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: grey,
    logoColor: { main: '#27535e' },
    shadowColor: { main: 'rgba(0, 0, 0, 0.1)' },
  },
  typography: {
    fontSize: 12,
  },
  panelSpacing: '15px',
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '11px 16px',
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
