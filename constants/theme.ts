import { Platform } from 'react-native';

export const AppColors = {
  background: '#EDE6DA',
  surface: '#FDFAF4',        // warm parchment — not stark white
  surfaceAlt: '#F5F0E6',
  border: '#E8DED0',
  textPrimary: '#1E1209',
  textSecondary: '#7A6248',
  textMuted: '#B5A090',
  accent: '#4A6E3C',
  accentLight: '#E8F2E2',
  accentWarm: '#C0614A',
  brown: '#5C3D2E',
  tabBar: '#FFFFFF',
  // Category accent colors
  growth:   '#4A6E3C',
  peace:    '#3A6E80',
  love:     '#A0504A',
  strength: '#7A6430',
  courage:  '#5C4070',
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

// ─── Time-of-day theming ────────────────────────────────────────────────────

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

export const TimeThemes: Record<TimeOfDay, {
  gradient: readonly [string, string, string];
  greeting: string;
  greetingEmoji: string;
  textColor: string;
  subtitleColor: string;
}> = {
  morning: {
    gradient: ['#FFF8EF', '#FCEED6', '#F6E4C0'] as const,
    greeting: 'Good morning',
    greetingEmoji: '☀️',
    textColor: '#2B1404',
    subtitleColor: '#9A7448',
  },
  afternoon: {
    gradient: ['#FFF5EA', '#FDE8CE', '#FAD7B0'] as const,
    greeting: 'Good afternoon',
    greetingEmoji: '🌤',
    textColor: '#2B1404',
    subtitleColor: '#9A6B3A',
  },
  evening: {
    gradient: ['#FFEFE1', '#FBDCC0', '#F6CFA7'] as const,
    greeting: 'Good evening',
    greetingEmoji: '🌅',
    textColor: '#2B1404',
    subtitleColor: '#8C5B22',
  },
  night: {
    gradient: ['#FBEEDD', '#F3DFC2', '#EBCDA8'] as const,
    greeting: 'Good night',
    greetingEmoji: '🌙',
    textColor: '#2B1404',
    subtitleColor: '#876032',
  },
};

// Kept for backward compatibility with drawer layout
export const Colors = {
  light: {
    text: '#1E1209',
    background: '#EDE6DA',
    tint: '#4A6E3C',
    tabIconDefault: '#B5A090',
    tabIconSelected: '#4A6E3C',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1C1C1C',
    tint: '#4A6E3C',
    tabIconDefault: '#888',
    tabIconSelected: '#4A6E3C',
  },
};

export const Moods = {
  morning: { colors: ['#FEF9F0', '#F0DFC0'] as const, text: '#1E1209' },
  focus:   { colors: ['#EDF5EE', '#C8E3CA'] as const, text: '#0E2010' },
  night:   { colors: ['#1A1E38', '#252A50', '#1A1E3A'] as const, text: '#F0ECFF' },
  love:    { colors: ['#FBF0EE', '#F0D8D4'] as const, text: '#1E1209' },
} as const;
