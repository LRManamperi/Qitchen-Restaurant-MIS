import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#000', // Black background
          color: '#fff', // White text color
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <h1>Qitchen</h1>
        {/* <Menu /> */}
        <About />
      </Box>
    </>
  );
}

export default App;
