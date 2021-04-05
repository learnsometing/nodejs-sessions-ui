import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles';

import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';

interface CustomPalette extends Palette {
  gray: PaletteColor;
  green: PaletteColor;
}

export interface CustomMUITheme extends Theme {
  palette: CustomPalette;
}

interface CustomThemeOptions extends ThemeOptions {
  palette: CustomPalette;
}

let theme = createMuiTheme({
  palette: {
    gray: {
      main: '#5F758E',
    },
    green: {
      main: '#6BBF47',
    },
  },
  typography: {
    h1: { fontSize: '3.052rem' },
    h2: { fontSize: '2.441rem' },
    h3: { fontSize: '1.953rem' },
    h4: { fontSize: '1.563rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },
    body1: { fontSize: '1rem' },
  },
} as CustomThemeOptions);

theme = responsiveFontSizes(theme);
export default theme;
