import React, { Component } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { BrowserRouter, StaticRouter } from "react-router-dom";

// server side render
const SSR = App =>
  class SSR extends Component<{
    store: any;
    url: string;
  }> {
    render() {
      const context = {};
      return (
        <Provider store={this.props.store} context={context}>
          <StaticRouter location={this.props.url}>
            <App />
          </StaticRouter>
        </Provider>
      );
    }
  };

// client side render
const CLIENT = configureState => Component => {
  const initStates = window.__INIT_STATES__;
  const store = configureState(initStates);
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>,
      document.getElementById("root")
    );
  });
};

export default function entry(configureState) {
  return IS_NODE ? SSR : CLIENT(configureState);
}
