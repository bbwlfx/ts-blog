import koaBody from "koa-body";
import Koa from "koa";
import path from "path";
import cors from "@koa/cors";
import KoaPug from "koa-pug";
import userAgent from "koa-useragent";
import renderProxy from "./utils/renderProxy";
import router from "./routes";

const app: any = new Koa();

app.use(koaBody({ multipart: true }));

new KoaPug({
  app,
  debug: false,
  pretty: false,
  compileDebug: false,
  basedir: "../template",
  viewPath: path.join(__dirname, "./template")
});
// 扩展context
app
  .use(async (ctx, next) => {
    ctx.success = (data = {}) => {
      ctx.body = {
        code: 0,
        message: "success",
        data
      };
    };

    ctx.fail = (message = "fail", code = -1) => {
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

app.on("error", err => {
  console.log("app error:", err);
});

app.use(cors());
renderProxy(app);

app.use(router.routes()).use(router.allowedMethods());

export default app;
