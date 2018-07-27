import { init } from '@rematch/core';
import * as models from './index';
import immerPlugin from '@rematch/immer';

const immer = immerPlugin();
export default function configure(initProps) {
  const store = init({
    models,
  });
  for(const model of Object.keys(models)) {
    store.dispatch({
      type: `${model}/@init`,
      payload: initProps[model]
    })
  }
  return store;
}