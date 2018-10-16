import { demoModalState } from "typings";
import { createModel } from "@rematch/core";

export const demo = createModel({
  state: ({
    outstr: "Hello World",
    count: 10
  } as any) as demoModalState,
  reducers: {
    "@init": (state: demoModalState, init: demoModalState) => {
      state = init;
      return state;
    },
    add(state: demoModalState, num) {
      state.count = state.count + (num || 1);
      return state;
    },
    reverse(state: demoModalState) {
      state.outstr = state.outstr
        .split("")
        .reverse()
        .join("");
      return state;
    }
  },
  effects: dispatch => ({
    async prefetchData() {
      const number = await new Promise(resolve => {
        setTimeout(() => {
          console.log("prefetch first screen data!");
          resolve(13);
        }, 1000);
      });
      dispatch.demo.add(number);
      return Promise.resolve();
    }
  })
});
