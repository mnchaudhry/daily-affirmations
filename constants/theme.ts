import { Platform } from 'react-native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const Moods = {
  morning: {
    colors: ['#FF9A9E', '#FECFEF'], // Soft Sunrise
    text: '#2D3436',
  },
  focus: {
    colors: ['#00C9FF', '#92FE9D'], // Deep Focus
    text: '#1C2833',
  },
  night: {
    colors: ['#0F2027', '#203A43', '#2C5364'], // Midnight
    text: '#FFFFFF',
  },
  love: {
    colors: ['#fa709a', '#fee140'], // Romance
    text: '#fff',
  },
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'System',
    serif: 'Times New Roman',
    rounded: 'System', 
    mono: 'Courier New',
  },
  android: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif-condensed',
    mono: 'monospace',
  },
  web: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif',
    mono: 'monospace',
  },
});

