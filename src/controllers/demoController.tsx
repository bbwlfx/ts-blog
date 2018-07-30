import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from 'models/configure';
import Demo from 'entry/demo';
import Loadable from 'react-loadable';

const demo: object = {
  async index (ctx) {
    const store = configureStore({
      demo: {
        count: 0,
        outstr: 'Hello World'
      }
    });
    const initState = store.getState();
    // const dom = (
    //   <Provider store={store}>
    //     <Demo />
    //   </Provider>
    // );
    let modules = [];
    const dom = (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Demo url={ctx.url} store={store} />
      </Loadable.Capture>
    );
    const html:string = renderToString(dom);
    ctx.render('demo', {
      html,
      __INIT_PROPS__: JSON.stringify(initState),
      IS_NODE: true
    });
  }
}
export default demo;