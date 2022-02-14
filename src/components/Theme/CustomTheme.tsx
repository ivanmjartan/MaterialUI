import * as React from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from "./ColorModeContext";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

declare module "@mui/material/styles" {
  interface DefaultTheme {
    spacing: (spacing: number) => string;
  }
}

const themeOption: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#1c0d3f',
      },
      secondary: {
        main: '#ED26B7',
      },
    },
    typography: {
      button: {
        textTransform: "none", //disable uppercase text label for all buttons
      }
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "standard" // define default for all TextBoxes
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: "standard" // define default for all TextBoxes
        },
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true
        }
      },
      MuiInput: { //it looks safe because MuiInput is used just for standard variant
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            fontSize: "14px",
            fontWeight: 200,
            border: "1px solid",
            borderColor:  ownerState.error ? theme.palette.error.main: "#ccd8e2", //color from palette
            borderRadius: "3px",
            paddingLeft:"5px",
            boxShadow: 'inset 0 1px 1px 0 rgb(31 53 74 / 15%)', //color from palette
            transition: theme.transitions.create([
              'border-color',
              'background-color',
              'box-shadow',
            ]),
            "&.Mui-focused": {
              borderColor:  ownerState.error ? theme.palette.error.main: theme.palette.secondary.main,
            },
          }),
          sizeSmall:{
            paddingBottom: "1px" // need some time and fix it
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none" //disable uppercase text label for all buttons
          }
        },
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `2px dashed red`,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: `4px dashed blue`,
            },
          },
        ],
      }
    },
  };

export const CustomTheme: React.FC = (props) => {
  const { children } = props;
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeOption,
        palette: {
          ...themeOption.palette,
          mode,
        },
      }),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}