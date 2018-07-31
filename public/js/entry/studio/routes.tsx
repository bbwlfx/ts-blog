import Loadable from 'react-loadable';
import * as Path from 'constants/path';
import Loading from 'components/loading';

export default [
  {
    name: 'studio',
    path: Path.Studio,
    component: Loadable({
      loader: () => import('containers/studio'),
      loading: Loading
    })
  }
];