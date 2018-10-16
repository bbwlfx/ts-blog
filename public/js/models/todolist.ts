import { createModel } from "@rematch/core";
import { todoListModal } from "typings";
export const todolist = createModel({
  state: ({
    list: []
  } as any) as todoListModal,
  reducers: {
    "@init": (state: todoListModal, init: todoListModal) => {
      state = init;
      return state;
    },
    deleteItem: (state: todoListModal, id: string) => {
      state.list = state.list.filter(item => item.id !== id);
      return state;
    },
    addItem: (state: todoListModal, text: string) => {
      const id = Math.random()
        .toString(16)
        .slice(2);
      state.list.push({
        id,
        text
      });
      return state;
    }
  },
  effects: dispatch => ({
    async asyncDelete(id: string) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      dispatch.todolist.deleteItem(id);
      return Promise.resolve();
    },
    async prefetchData(init) {
      dispatch.todolist["@init"](init);
      return Promise.resolve();
    }
  })
});
