import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages'
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Pages />
      </Box>
    </BrowserRouter>
  );
}

export default App;