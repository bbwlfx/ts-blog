import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import SSR from 'components/ssr';

export default function entry(configureState) {
  return Component => {
    if(!window.IS_NODE) {
      const initProps = window.__INIT_PROPS__;
      const store = configureState(initProps);
      Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(<Provider store={store}>
          <Component />
        </Provider>, document.getElementById('root'));
      });
    }
    return SSR(Component);
  }
}