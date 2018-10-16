import getPage from "../utils/getPage";
import { Entry, configureStore } from "../public/buildServer/home";

interface homeState {
  index: (ctx: any) => {};
  demo: (ctx: any) => {};
}
const home: homeState = {
  async index(ctx) {
    const store = configureStore({
      common: {
        url: ctx.url
      },
      todolist: {
        list: []
      }
    });
    const page = await getPage({
      store,
      url: ctx.url,
      Component: Entry,
      page: "home",
      model: "todolist",
      params: {
        list: [
          {
            id: "hello",
            text: "node prefetch data"
          }
        ]
      }
    });
    ctx.render(page);
  },

  async demo(ctx) {
    const store = configureStore({
      common: {
        url: ctx.url
      },
      demo: {
        count: 10,
        outstr: "Hello World!"
      }
    });
    const page = await getPage({
      store,
      url: ctx.url,
      Component: Entry,
      page: "home",
      model: "demo"
    });
    ctx.render(page);
  }
};
export default home;
