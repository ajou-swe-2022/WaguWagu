const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
    "@Pages": path.resolve(__dirname, "src/Pages/"),
    "@Util": path.resolve(__dirname, "src/Common/Util/"),
    "@Style": path.resolve(__dirname, "src/Common/Style/"),
  })
);
