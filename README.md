## Ui-kit
react components for minterest frontend app

### installation

1. add ui-kit to your project dependencies `"@ui-kit": "https://github.com/minterest-finance/ui-kit.git",`
2. setup theming:
   - `import { ThemeProvider, getTheme, CssBaseline } from '@ui-kit';`
   -  ```
      <ThemeProvider theme={getTheme('light')}>
      <CssBaseline />
      <App>
      </ThemeProvider>
      ```
   - pass default theme mode(light or dark) in `getTheme`
   - `import { useTheme } from '@ui-kit'` to access theme in components
    

### development
#### startup:

1. Install dependencies `yarn install`
2. To start storybook `yarn storybook`, make sure use node v16.0.0
3. To build storybook `yarn build-storybook`
