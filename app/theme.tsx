'use client';
import * as React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { getInitColorSchemeScript } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  // const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  // React.useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme === 'light' || storedTheme === 'dark') {
  //     setMode(storedTheme);
  //   }
  // }, []);


  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => {
  //         const newMode = prevMode === 'light' ? 'dark' : 'light';
  //         localStorage.setItem('theme', newMode);
  //         return newMode;
  //       });
  //     },
  //   }),
  //   [],
  // );

  const theme = extendTheme({
    cssVarPrefix: 'md-demo',
  })

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <CssVarsProvider theme={theme}>
      {children}
    </CssVarsProvider>
    // {/* </ColorModeContext.Provider> */}
  );
}

export const useColorMode = () => React.useContext(ColorModeContext);