import configureStore from 'models/configure';
import Demo from 'server/demo';
import getPage from '../utils/getPage';

const demo: object = {
  async index (ctx) {
    const store = configureStore({
      studio: {}
    });
    const page = getPage({
      store,
      url: ctx.url,
      Component: Demo,
      page: 'studio'
    });
    ctx.render(page);
  }
}
export default demo;