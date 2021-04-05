import React, { ReactElement } from 'react';

// Layouts
import DefaultLayout from './templates/layouts/Default';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/mui-theme';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
