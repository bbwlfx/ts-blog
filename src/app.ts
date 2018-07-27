import koaBody from 'koa-body';
import Koa from 'koa';
import path from 'path';
import cors from '@koa/cors';
import session from 'koa-session';
import KoaPug from 'koa-pug';
import redisStore from 'koa-redis';
import koaRouter from 'koa-router';
import userAgent from 'koa-useragent';
import renderProxy from './utils/renderProxy';
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

app.use(async (ctx, next) => {
  ctx.config = config;
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
import { render } from '../node_modules/_@types_react-dom@16.0.6@@types/react-dom';
router.use('/demo', demoRouter.routes());

app.use(router.routes()).use(router.allowedMethods());


app.listen(config.server.port || 3333, () => {
  console.log('start server at port: ', config.server.port);
});

