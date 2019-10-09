import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

import { carReducer } from './reducers/carReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
