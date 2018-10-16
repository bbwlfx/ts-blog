module.exports = require("./conf.dev.ts");
if (process.env.NODE_ENV === "development") {
  module.exports = require("./conf.dev.ts");
} else {
  module.exports = require("./conf.prod.ts");
}
