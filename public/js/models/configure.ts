import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import * as models from "./index";

const immer = immerPlugin();

export default function configure(initStates) {
  const store = init({
    models,
    plugins: [immer]
  });
  for (const model of Object.keys(models)) {
    store.dispatch({
      type: `${model}/@init`,
      payload: initStates[model]
    });
  }
  return store;
}
