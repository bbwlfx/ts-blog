import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

export default function entry(configureState) {
  return Component => {
    const initProps = window.__INIT_PROPS__;
    const store = configureState(initProps);
    Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(<Provider store={store}>
        <Component />
      </Provider>, document.getElementById('root'));
    });
  }
}