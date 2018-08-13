module.exports = require("./conf.dev");
if (process.env.NODE_ENV === "development") {
  module.exports = require("./conf.dev");
} else {
  module.exports = require("./conf.prod");
}
