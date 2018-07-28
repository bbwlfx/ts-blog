import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Demo from 'containers/demo';
import configureStore from 'models/configure';

const demo: object = {
  async index (ctx) {
    const store = configureStore({
      demo: {
        count: 0,
        outstr: 'Hello World'
      }
    });
    const initState = store.getState();
    const dom = (
      <Provider store={store}>
        <Demo />
      </Provider>
    );
    const html:string = renderToString(dom);
    ctx.render('demo', {
      html,
      __INIT_PROPS__: JSON.stringify(initState)
    });
  }
}
export default demo;