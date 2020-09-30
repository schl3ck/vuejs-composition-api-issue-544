/* eslint-disable @typescript-eslint/no-var-requires */

const WebpackAutoInject = require("webpack-auto-inject-version");
const EmitJsonFileWebpackPlugin = require("emit-json-file-webpack-plugin");

const versionFileContent = {
  version: process.env.npm_package_version,
  buildDate: new Date(),
};

module.exports = {
  lintOnSave: false,
  /** @param {import("webpack-chain")} config  */
  chainWebpack(config) {
    config.resolve.alias.set("bootstrap-vue$", "bootstrap-vue/src/index.js");

    config
      .plugin("AIV")
      .use(WebpackAutoInject, [{components: {AutoIncreaseVersion: false}}]);

    config
      .plugin("emitFiles")
      .use(EmitJsonFileWebpackPlugin, [
        [{path: "version.json", content: versionFileContent}],
      ]);
  },
};
