import getPage from "../utils/getPage";
import { Entry, configureStore } from "../public/buildServer/demo";

const demo: object = {
  async index(ctx) {
    const store = configureStore({
      demo: {
        count: 10,
        outstr: "Hello World!"
      }
    });
    const page = await getPage({
      store,
      url: ctx.url,
      Component: Entry,
      page: "demo",
      model: "demo"
    });
    ctx.render(page);
  }
};
export default demo;
