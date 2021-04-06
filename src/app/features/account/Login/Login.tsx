import React, { ReactElement } from 'react';

// Components
import LoginForm from './LoginForm';

// Material UI
import { Box } from '@material-ui/core';

function Login(): ReactElement {
  return (
    <Box alignItems="center" display="flex" justifyContent="center">
      <LoginForm />
    </Box>
  );
}

export default Login;
