import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './style/theme';
import GlobalStyle from './style/global';

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <GlobalStyle />
      <App />
    </Grommet>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
