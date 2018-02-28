/* config-overrides.js */
let path = require('path');


function rewireJquery(config, env) {
  config.resolve = {
    alias: {
         "jquery": path.join(__dirname, "./jquery-stub.js"),
    }
  };
  return config;
}
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config = rewirePreact(config, env);c
  if (env === "development") {
    config = rewireJquery(config, env);
  }
  return config;
};