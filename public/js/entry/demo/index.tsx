import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Demo from 'containers/demo';
import configureStore from 'models/configure';

const initState = window.__INIT_PROPS__;
const store = configureStore(initState);
render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.getElementById('root')
);