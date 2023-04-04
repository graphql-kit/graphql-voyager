import { createTheme } from '@mui/material/styles';
import { cyan, grey } from '@mui/material/colors';

import css from './variables.css';

declare module '@mui/material/styles' {
  interface Palette {
    logoColor: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    logoColor: PaletteOptions['primary'];
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
          width: css.iconsSize,
          height: css.iconsSize,
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
          fontSize: css.baseFontSize - 2,
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
          [css.bigViewport]: {
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
          backgroundColor: css.alertColor,
        },
      },
    },
  },
});
