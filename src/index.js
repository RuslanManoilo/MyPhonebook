import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';


const theme = {
  colors: {
    white: "#ffffff",
    error: "#ff6b6b",
  },

  radii: {
    sm: '4px',
    md: '8px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='goit-react-hw-08-phonebook-login'>
        <ThemeProvider theme={theme} >
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);