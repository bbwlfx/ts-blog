import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Demo from 'containers/demo';
import { init } from '@rematch/core';
import configureStore from 'models/configure';

const demo: object = {
  async index (ctx) {
    const initProps = {
      demo: {
        count: 0,
        outstr: 'Hello World'
      }
    };
    const store = configureStore(initProps);
    const dom = (
      <Provider store={store}>
        <Demo />
      </Provider>
    );
    const html:string = renderToString(dom);
    ctx.render('demo', {
      html,
      __INIT_PROPS__: JSON.stringify(initProps)
    });
  }
}
export default demo;