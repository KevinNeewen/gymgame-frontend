import React from 'react';
import { Box, Typography } from '@mui/material';
import MintAlready from './MintedAlready';
import MintWhiteList from './MintWhiteList';
import { useParams } from 'react-router-dom';
import MintNotReady from './MintNotReady';

const styles = {
  containerBox: {
    m: '1rem auto',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export type routeParams = {
  state: string;
};

const MintMainContent = () => {
  const [amount, setAmount] = React.useState<number>(3); // fetch from BE
  const routeParams = useParams() as routeParams;

  const mintedNumber = 4322; // fetch from BE
  const totalNumber = 10000; // fetch from BE
  const singlePrice = 2.5; // fetch from BE
  const handleAdd = () => setAmount(amount + 1);
  const handleRemove = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h1" component="div" gutterBottom>
        Mint
      </Typography>
      {routeParams && routeParams.state === 'not-ready' ? (
        <MintNotReady />
      ) : (
        <>
          <MintAlready mintedNumber={mintedNumber} totalNumber={totalNumber} />
          <MintWhiteList
            totalPrice={singlePrice * amount}
            singlePrice={singlePrice}
            initialNumber={amount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </>
      )}
    </Box>
  );
};

export default React.memo(MintMainContent);
