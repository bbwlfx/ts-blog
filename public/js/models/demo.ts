import { demoModalState } from "typings";
import { createModel } from "@rematch/core";

export const demo = createModel({
  state: ({} as any) as demoModalState,
  reducers: {
    "@init": (state: demoModalState, init: demoModalState) => {
      return { ...state, ...init };
    },
    add(state: demoModalState, num) {
      return {
        ...state,
        count: state.count + (num | 1)
      };
    },
    reverse(state: demoModalState) {
      return {
        ...state,
        outstr: state.outstr
          .split("")
          .reverse()
          .join("")
      };
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
