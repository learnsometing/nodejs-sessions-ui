import React, { ReactElement } from 'react';

// Components
import AccountMenu from './AccountMenu';

// Interfaces
import { CustomMUITheme } from '../../styles/mui-theme';

// Material UI
import { Box, Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

function Header(): ReactElement {
  const theme: CustomMUITheme = useTheme();

  return (
    <Box bgcolor={theme.palette.gray.main} component="header" py={'.5rem'}>
      <Container maxWidth="lg">
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <div style={{ color: theme.palette.green.main }}>
            <Typography variant="h1">nodejs-sessions</Typography>
          </div>
          <AccountMenu />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
