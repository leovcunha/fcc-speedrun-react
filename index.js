import React from 'react';
import ReactDOM from 'react-dom';
import App from './fcc/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('react'));