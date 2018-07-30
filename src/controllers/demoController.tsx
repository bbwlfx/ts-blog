import configureStore from 'models/configure';
import Demo from 'server/demo';
import getPage from '../utils/getPage';

const demo: object = {
  async index (ctx) {
    const store = configureStore({
      demo: {
        count: 10,
        outstr: 'Hello World!'
      }
    });
    const page = getPage({
      store,
      url: ctx.url,
      Component: Demo,
      page: 'demo'
    });
    ctx.render('demo', page);
  }
}
export default demo;