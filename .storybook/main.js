module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = `/${process.env.PATH_PREFIX}/`;
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = `/${process.env.PATH_PREFIX}/`;
    return config;
  },
}
