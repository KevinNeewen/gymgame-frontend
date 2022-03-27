import React from 'react';
import { Box, Typography } from '@mui/material';
import MintAlready from './MintedAlready';
import MintWhiteList from './MintWhiteList';

const styles = {
  containerBox: { m: '1rem 20vw 1rem 15vw', display: 'flex', flexDirection: 'column' },
};

const MintMainContent = () => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h1" component="div" gutterBottom>
        Mint
      </Typography>
      <MintAlready mintedNumber={4322} totalNumber={10000} />
      <MintWhiteList />
    </Box>
  );
};

export default React.memo(MintMainContent);