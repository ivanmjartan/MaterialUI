import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const currentTheme = createTheme(
    {
        palette: {
          primary: {
            main: '#1c0d3f',
          },
          secondary: {
            main: '#ED26B7',
          },
        },
    }
);

export const CustomTheme:React.FC = (props) => {
    const {children} = props;
  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  );
}