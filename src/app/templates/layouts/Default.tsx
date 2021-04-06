import React, { ReactElement } from 'react';

// Components
import Header from '../../components/Header';
import Routes from '../../components/Routes';

// Material UI
import { Box, Container } from '@material-ui/core';

function DefaultLayout(): ReactElement {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Box py={2}>
          <Routes />
        </Box>
      </Container>
    </div>
  );
}

export default DefaultLayout;
