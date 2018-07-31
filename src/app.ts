import koaBody from 'koa-body';
import Koa from 'koa';
import path from 'path';
import cors from '@koa/cors';
import session from 'koa-session';
import KoaPug from 'koa-pug';
import redisStore from 'koa-redis';
import koaRouter from 'koa-router';
import userAgent from 'koa-useragent';
import Loadable from 'react-loadable';
import renderProxy from './utils/renderProxy';
import { sequelize, models } from './db';
import config from './config';

const app: any = new Koa();

app.use(koaBody({ multipart: true }));

new KoaPug({
  app,
  debug: false,
  pretty: false,
  compileDebug: false,
  basedir: '../template',
  viewPath: path.join(__dirname, '../template')
});
// 扩展context
app.use(async (ctx, next) => {
  ctx.config = config;
  sequelize.sync();
  ctx.sequelize = sequelize;
  ctx.models = models;

  ctx.success = (data = {}) => {
    ctx.body = {
      code: 0,
      message: 'success',
      data
    };
  };

  ctx.fail = (message = 'fail', code = -1) => {
    ctx.body = {
      code,
      message,
      data: {}
    };
  };
  await next();
})
  .use(userAgent);
// app.use();

app.on('error', err => {
  console.log('app error:', err);
});

app.use(cors());
renderProxy(app, config);
const router = new koaRouter();

import demoRouter from './routes/demo';
import studioRouter from './routes/studio';
router.use('/demo', demoRouter.routes());
router.use('/studio', studioRouter.routes());

app.use(router.routes()).use(router.allowedMethods());


app.listen(config.server.port || 3333, async() => {
  await Loadable.preloadAll();
  console.log('start server at port: ', config.server.port);
});

