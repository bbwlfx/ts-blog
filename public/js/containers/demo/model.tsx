import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';

const immer = immerPlugin();

const demo = {
  state: {
    count: 0,
    outstr: 'Hello World'
  },
  reducer: {
    add(state) {
      state.count += 1;
      return state;
    },
    reserve(state) {
      state.outstr = state.outstr.split('').reserve().join();
      return state;
    }
  }
}

export default init({
  models: {
    demo
  },
  plugins: [immer]
});