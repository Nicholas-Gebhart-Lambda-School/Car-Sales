import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
