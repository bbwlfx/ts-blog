import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import SSR from "components/ssr";

export default function entry(configureState) {
  return Component => {
    if (!IS_NODE) {
      const initStates = window.__INIT_STATES__;
      const store = configureState(initStates);
      Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
          <Provider store={store}>
            <Component />
          </Provider>,
          document.getElementById("root")
        );
      });
    }
    return SSR(Component);
  };
}
