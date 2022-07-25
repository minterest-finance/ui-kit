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
    if(process.env.PUBLIC_URL){
      config.output.publicPath = `${process.env.PUBLIC_URL}/`;
    }
    return config;
  },
  managerWebpack: async (config) => {
    if(process.env.PUBLIC_URL){
      config.output.publicPath = `${process.env.PUBLIC_URL}/`;
    }
    return config;
  },
}
