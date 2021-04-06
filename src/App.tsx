import React, { ReactElement } from 'react';

// Layouts
import DefaultLayout from './app/templates/layouts/Default';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/styles/mui-theme';

// React Router DOM
import { BrowserRouter as Router } from 'react-router-dom';

// Redux Store
import store from './app/store';
import { Provider } from 'react-redux';

function App(): ReactElement {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <DefaultLayout />
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
