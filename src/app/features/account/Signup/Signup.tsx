import React, { ReactElement } from 'react';

// Components
import SignupForm from './SignupForm';

// Material UI
import { Box } from '@material-ui/core';

function Signup(): ReactElement {
  return (
    <Box alignItems="center" display="flex" justifyContent="center">
      <SignupForm />
    </Box>
  );
}

export default Signup;
