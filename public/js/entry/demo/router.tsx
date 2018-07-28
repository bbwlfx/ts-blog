import Loadable from 'react-loadable';
import React from 'react';
import * as Path from 'constants/path';

export default [
  {
    name: 'demo',
    path: Path.Demo,
    component: Loadable({
      loader: () => import('containers/demo'),
      loading: <div>Loading...</div>
    })
  }
];