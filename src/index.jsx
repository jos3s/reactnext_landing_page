import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/globalStyles';
import Home from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
