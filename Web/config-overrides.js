const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
    "@Pages": path.resolve(__dirname, "src/Component/Pages/"),
    "@Atoms": path.resolve(__dirname, "src/Component/Atoms/"),
    "@Molecules": path.resolve(__dirname, "src/Component/Molecules/"),
    "@Organisms": path.resolve(__dirname, "src/Component/Organisms/"),
    "@Templates": path.resolve(__dirname, "src/Component/Templates/"),
    "@Util": path.resolve(__dirname, "src/Common/Util/"),
    "@Style": path.resolve(__dirname, "src/Common/Style/"),
    "@Constant": path.resolve(__dirname, "src/Common/Constant/"),
  })
);
