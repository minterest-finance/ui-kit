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
   
3. to update package, remove in yarn.lock record about ui-kit, or specify commit hash in package.json E.g. `"@ui-kit": "https://github.com/minterest-finance/ui-kit.git#commit-hash",` or branch `"@ui-kit": "https://github.com/minterest-finance/ui-kit.git#develop",`
    

### development
#### startup:

1. Install dependencies `yarn install`
2. To start storybook `yarn storybook`, make sure use node v16.0.0
3. To build storybook `yarn build-storybook`

Before start making new component, check is you can make it based on mui https://mui.com/material-ui/getting-started/overview/

#### how to add new color:
1. Open file node_modules/@mui/material/styles/createPalette.d.ts
2. add new color name to `interface Palette` E.g.: 
```
interface Palette {
   warning: PaletteColor;
   info: PaletteColor;
   success: PaletteColor;
+  custom: PaletteColor;
   grey: Color;
   text: TypeText;
   divider: TypeDivider;
```
3. and here:
```
   export interface PaletteOptions {
   warning?: PaletteColorOptions;
   info?: PaletteColorOptions;
   success?: PaletteColorOptions;
+  custom?: PaletteColorOptions;
   mode?: PaletteMode;
   tonalOffset?: PaletteTonalOffset;
   contrastThreshold?: number;
```
4. run `npx patch-package @mui/material` Don't forget commit and push patches folder!
5. Open `src/theme.ts` define main color in palette for added color name.
6. now you can use it.

#### how to add new typography:
1. Open file node_modules/@mui/material/styles/createTypography.d.ts
2. add new variant to `type Variant` E.g.: 
```
export type Variant =
   | 'body2'
   | 'caption'
   | 'button'
+  | 'custom'
   | 'overline';
```
3. run `npx patch-package @mui/material` Don't forget commit and push patches folder!
4. Open `src/theme.ts` add styles to new variant in theme.
5. now you can use it.
