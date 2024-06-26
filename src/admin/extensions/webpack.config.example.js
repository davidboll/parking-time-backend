"use strict";

const path = require("path");

module.exports = (config, webpack) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    translations: path.resolve(__dirname, "../translations"),
  };

  config.plugins.push(
    new webpack.ContextReplacementPlugin(/translations$/, (data) => {
      delete data.dependencies[0].critical;
      return data;
    })
  );

  return config;
};
