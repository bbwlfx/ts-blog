### 使用技术栈

- React@16.3
- @rematch
- TypeScript
- Koa@2
- Webpack@4
- react-router
- SSR
- Pug

### 目录结构

- public 前端代码
- src Node代码
- scripts 辅助脚本
- src/public 打包输出文件
- src/template 模板文件
- output 生产环境打包文件

### 启动

#### 开发环境
> 第一次启动执行完startfe之后再执行start

`$ npm install` 安装依赖

`$ npm run startfe` 启动前端代码，打包后的代码存放在node环境下 -> /src/public 其中buildServer为SSR打包文件，在node环境中使用 

`$ npm run start` 启动node代码

访问`localhost:7999/`查看

#### 生产环境

`$ npm run buildfe` 打包前端代码 -> /src/public/buildServer  /src/public/buildPublic
`$ npm run build` 打包node代码 -> output/src

通过`$ node output/src/app.js`可以启动node，后续配置尚未完成

### 代码结构说明

#### Public

`/decorators/entry`是装饰器，同时处理SSR和客户端渲染。用来装饰每个模块的入口文件。

`/entry`存放所有模块的入口文件，在webpack中由`./scripts/get_entry.js`脚本统一获取所有的entries，因此每次增加新页面不需要修改webpack的配置。

`/entry/xxx/routes.tsx`存放当前模块的二级路由

`/models`中`configure`用以触发所有model的init函数，并初始化相应model到的state，做SSR时在服务端中调用。

`/models`中的其他文件存放相对应模块的store，状态管理由@rematch库来管理，和redux使用相似。

#### Node

Node的主要作用是进行模板渲染以及SSR

`/utils/bundle`文件用以获取link和script标签，插入模板中

`/getPage`用户获取当前页面的所有状态，传入ctx.render中使用

`/template` 返回前端模板,简化为所有页面都返回`index.pug`模板

`/controllers/`每一个模块的controller主要由三部分构成：

```js
const store = configureStore({
  demo: {
    count: 10,
    outstr: "Hello World!"
  }
});
const page = getPage({
  store,
  url: ctx.url,
  Component: Entry,
  page: "demo"
});
ctx.render(page);
```

- configureStore用户初始化state，调用的是`/public/models/configure`文件，传入getPage函数中

- getPage主要用来进行SSR渲染，获取init_state、html、css和js代码写入模板

- render用于渲染模板

> 可以先看/demo页面熟悉流程，然后本地写一个/demo{n}页面熟悉代码流程