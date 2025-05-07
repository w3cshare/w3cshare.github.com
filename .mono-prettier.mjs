import prettierPluginSmart from "prettier-plugin-smart";

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
};
