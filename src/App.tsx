import React, { ReactElement } from 'react';

// Layouts
import DefaultLayout from './templates/layouts/Default';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/mui-theme';

// React Router DOM
import { BrowserRouter as Router } from 'react-router-dom';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <DefaultLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
