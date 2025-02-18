import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '20px 0',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        bottom: 0,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Cindy Bond. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
