import { Platform } from 'react-native';

export const AppColors = {
  background: '#EDE6DA',
  surface: '#FFFFFF',
  surfaceAlt: '#F7F3EC',
  border: '#E0D5C4',
  textPrimary: '#2C1A0E',
  textSecondary: '#8B7355',
  textMuted: '#B5A090',
  accent: '#5C7A4E',
  accentLight: '#ECF2E8',
  brown: '#5C3D2E',
  tabBar: '#FFFFFF',
};

export const Fonts = {
  serif: Platform.select({
    ios: 'Georgia',
    android: 'serif',
    web: 'Georgia, serif',
    default: 'Georgia',
  }),
  sans: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    web: 'system-ui, sans-serif',
    default: 'System',
  }),
};

// Kept for backward compatibility with drawer layout
export const Colors = {
  light: {
    text: '#2C1A0E',
    background: '#EDE6DA',
    tint: '#5C7A4E',
    tabIconDefault: '#B5A090',
    tabIconSelected: '#5C7A4E',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1C1C1C',
    tint: '#5C7A4E',
    tabIconDefault: '#888',
    tabIconSelected: '#5C7A4E',
  },
};

export const Moods = {
  morning: { colors: ['#EDE6DA', '#E4DDD0'] as const, text: '#2C1A0E' },
  focus:   { colors: ['#E8F0E4', '#D4E8CC'] as const, text: '#1C2833' },
  night:   { colors: ['#0F2027', '#203A43', '#2C5364'] as const, text: '#FFFFFF' },
  love:    { colors: ['#F5EFE6', '#F0E4D8'] as const, text: '#2C1A0E' },
} as const;
