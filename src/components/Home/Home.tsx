import React, { ReactElement } from 'react';

// Material UI
import { Typography } from '@material-ui/core';

function Home(): ReactElement {
  return (
    <Typography variant="h1" component="p">
      You're logged out.
    </Typography>
  );
}

export default Home;
