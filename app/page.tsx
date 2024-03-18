'use client';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

import Header from '@/components/header';
import NavBar from '@/components/nav-bar';
import Copyright from '@/components/copyright';
import AppShell from '@/components/app-shell';

import { useColorMode } from '@/app/theme_no_cssvar';
import { useColorScheme } from '@mui/material/styles';

export default function Dashboard() {
  const colorMode = useColorMode();


  // const { mode, setMode } = useColorScheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   // for server-side rendering
  //   // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  //   return null;
  // }

  return (
    <Grid container spacing={3}>
      <Button onClick={colorMode.toggleColorMode}>toggle</Button>
      {/* <Button
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {mode === 'light' ? 'Dark' : 'Light'}
      </Button> */}

      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          {/* <Chart /> */}
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          {/* <Deposits /> */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* <Orders /> */}
        </Paper>
      </Grid>
    </Grid>
    //       <Copyright sx={{ pt: 4 }} />
    //     </Container>
    //   </Box>
    // </Box>

  );
}