import config from "./config";
import app from "./server";
import Loadable from "react-loadable";

process.on("uncaughtException", function(error) {
  console.log(error);
});

process.on("unhandledRejection", function(rejection) {
  console.log(rejection);
});

app.listen(config.server.port || 3333, async () => {
  await Loadable.preloadAll();
  console.log("start server at port: ", config.server.port);
});
