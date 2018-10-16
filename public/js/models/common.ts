import { CommonModelState } from "typings";
import { createModel } from "@rematch/core";

export const common = createModel({
  state: ({} as any) as CommonModelState,
  reducers: {
    "@init": (state: CommonModelState, init: CommonModelState) => {
      state = init;
      return state;
    }
  }
});
