import Loadable from "react-loadable";
import * as Path from "constants/path";
import Loading from "components/loading";

export default [
  {
    name: "demo",
    path: Path.Demo,
    component: Loadable({
      loader: () => import("containers/demo"),
      loading: Loading
    }),
    exact: true
  },
  {
    name: "todolist",
    path: Path.Todolist,
    component: Loadable({
      loader: () => import("containers/todolist"),
      loading: Loading
    }),
    exact: true
  }
];
